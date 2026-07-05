import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

await loadDotEnv();

const outputPath = resolve('src/data/releases.generated.json');
const repository = parseRepository();
const assetName = process.env.KPASSWORD_RELEASE_ASSET_NAME || 'KPassword-Setup.exe';

main().catch((error) => {
  console.warn(`[releases] Sincronização ignorada: ${error.message}`);
  process.exitCode = 0;
});

async function main() {
  if (!repository || isPlaceholder(repository.owner, repository.repo)) {
    console.log('[releases] Repositório não configurado. Usando fallback local seguro.');
    return;
  }

  const releases = await fetchReleases(repository.owner, repository.repo);
  const normalized = releases
    .filter((release) => !release.draft)
    .map((release) => normalizeRelease(release));

  const stableReleases = normalized.filter((release) => !release.prerelease);
  const latestStable = stableReleases[0] || normalized[0] || null;

  const generated = {
    generatedAt: new Date().toISOString(),
    source: 'github-api',
    repository,
    assetName,
    latestStable: latestStable ? withDownload(latestStable, repository, assetName) : null,
    releases: normalized.slice(0, 20)
  };

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(generated, null, 2)}\n`, 'utf8');
  console.log(`[releases] ${generated.releases.length} release(s) sincronizado(s) de ${repository.owner}/${repository.repo}.`);
}

function parseRepository() {
  const explicitOwner = process.env.PUBLIC_GITHUB_OWNER || process.env.KPASSWORD_GITHUB_OWNER;
  const explicitRepo = process.env.PUBLIC_GITHUB_REPO || process.env.KPASSWORD_GITHUB_REPO;

  if (explicitOwner && explicitRepo) {
    return { owner: explicitOwner, repo: explicitRepo };
  }

  const githubRepository = process.env.GITHUB_REPOSITORY;
  if (githubRepository?.includes('/')) {
    const [owner, repo] = githubRepository.split('/');
    return { owner, repo };
  }

  for (const cwd of ['..', '.']) {
    const remote = readGitRemote(cwd);
    const parsed = parseGitHubRemote(remote);
    if (parsed) return parsed;
  }

  return null;
}

function readGitRemote(cwd) {
  try {
    return execFileSync('git', ['-C', cwd, 'remote', 'get-url', 'origin'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
  } catch {
    return '';
  }
}

function parseGitHubRemote(remote) {
  if (!remote) return null;

  const match = remote.match(/github\.com[:/](?<owner>[^/\s]+)\/(?<repo>[^/\s]+?)(?:\.git)?$/i);
  if (!match?.groups) return null;

  return {
    owner: match.groups.owner,
    repo: match.groups.repo.replace(/\.git$/i, '')
  };
}

function isPlaceholder(owner, repo) {
  const unsafeOwners = new Set(['', 'SEU-USUARIO', 'SEU_USUARIO', 'OWNER', 'USUARIO']);
  const unsafeRepos = new Set(['', 'SEU-REPOSITORIO', 'SEU_REPOSITORIO', 'REPO', 'REPOSITORIO']);
  return unsafeOwners.has(String(owner || '').toUpperCase()) || unsafeRepos.has(String(repo || '').toUpperCase());
}

async function fetchReleases(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}/releases?per_page=30`;
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'kpassword-website-release-sync'
  };

  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API ${response.status}: ${text.slice(0, 180)}`);
  }

  return response.json();
}

function normalizeRelease(release) {
  return {
    tagName: release.tag_name,
    name: release.name || release.tag_name,
    publishedAt: release.published_at,
    htmlUrl: release.html_url,
    body: release.body || '',
    prerelease: Boolean(release.prerelease),
    draft: Boolean(release.draft),
    assets: (release.assets || []).map((asset) => ({
      name: asset.name,
      size: asset.size,
      downloadCount: asset.download_count,
      browserDownloadUrl: asset.browser_download_url,
      contentType: asset.content_type,
      updatedAt: asset.updated_at
    }))
  };
}

function withDownload(release, repository, preferredAssetName) {
  const exactAsset = release.assets.find((asset) => asset.name === preferredAssetName);
  const setupAsset = release.assets.find((asset) => /^KPassword-Setup-v?[0-9][0-9A-Za-z_.-]*\.exe$/i.test(asset.name))
    || release.assets.find((asset) => /KPassword.*Setup.*\.exe$/i.test(asset.name))
    || release.assets.find((asset) => /Setup.*KPassword.*\.exe$/i.test(asset.name))
    || release.assets.find((asset) => /KPassword.*\.exe$/i.test(asset.name))
    || release.assets.find((asset) => /\.exe$/i.test(asset.name));
  const asset = exactAsset || setupAsset || null;

  return {
    ...release,
    directDownloadUrl: asset?.browserDownloadUrl || release.htmlUrl || `https://github.com/${repository.owner}/${repository.repo}/releases/latest`,
    asset
  };
}

async function loadDotEnv() {
  const envPath = resolve('.env');
  try {
    const content = await readFile(envPath, 'utf8');
    for (const rawLine of content.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#') || !line.includes('=')) continue;
      const [key, ...rest] = line.split('=');
      if (!key || process.env[key]) continue;
      process.env[key] = rest.join('=').replace(/^['\"]|['\"]$/g, '');
    }
  } catch {
    // .env é opcional.
  }
}
