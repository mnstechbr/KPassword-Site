const configuredOwner = (import.meta.env.PUBLIC_GITHUB_OWNER || 'mnstechbr').trim();
const configuredRepo = (import.meta.env.PUBLIC_GITHUB_REPO || 'KPassword').trim();
const placeholderOwners = new Set(['SEU-USUARIO', 'SEU_USUARIO', 'OWNER', 'USUARIO']);
const placeholderRepos = new Set(['SEU-REPOSITORIO', 'SEU_REPOSITORIO', 'REPO', 'REPOSITORIO']);

export const product = {
  name: 'KPassword',
  tagline: 'Gerenciador de senhas local e sem internet para Windows.',
  shortDescription:
    'Guarde credenciais no seu computador, sem conta e sem nuvem obrigatória.',
  currentVersion: 'v0.9.3',
  platform: 'Windows',
  releaseAssetName:
    import.meta.env.KPASSWORD_RELEASE_ASSET_NAME || 'KPassword-Setup.exe'
};

export const repo = {
  owner: configuredOwner,
  name: configuredRepo,
  get isConfigured() {
    return Boolean(
      configuredOwner &&
        configuredRepo &&
        !placeholderOwners.has(configuredOwner.toUpperCase()) &&
        !placeholderRepos.has(configuredRepo.toUpperCase())
    );
  }
};

function githubUrl(path = '') {
  if (!repo.isConfigured) return '';
  return `https://github.com/${repo.owner}/${repo.name}${path}`;
}

function githubApiUrl(path = '') {
  if (!repo.isConfigured) return '';
  return `https://api.github.com/repos/${repo.owner}/${repo.name}${path}`;
}

export const links = {
  repository: githubUrl(),
  latestRelease: githubUrl('/releases/latest'),
  latestDownload: githubUrl(`/releases/latest/download/${product.releaseAssetName}`),
  issues: githubUrl('/issues'),
  securityAdvisories: githubUrl('/security/advisories'),
  releases: githubUrl('/releases'),
  latestReleaseApi: githubApiUrl('/releases/latest'),
  releasesApi: githubApiUrl('/releases?per_page=20')
};

export const contact = {
  securityEmail: 'security@kpassword.app',
  generalEmail: 'contato@kpassword.app'
};

export const securityBullets = [
  'Cofre local, sem conta e sem sincronização obrigatória.',
  'Argon2id para derivação da chave a partir da senha mestra.',
  'AES-256-GCM com AAD para criptografia autenticada do cofre.',
  'cryptoVersion 2 para evolução controlada do formato criptográfico.',
  'Backups criptografados e backup pré-migração.',
  'Atualizador assinado, bloqueio automático e área de transferência revisada.'
];
