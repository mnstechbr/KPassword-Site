export const site = {
  name: 'KPassword',
  version: 'v0.9.3',
  tagline: 'Gerenciador de senhas local/offline para Windows.',
  description:
    'KPassword é um gerenciador de senhas local/offline para Windows, feito com Tauri, React e Rust, com foco em controle local, backup criptografado e transparência sobre segurança.',
  url: 'https://kpassword.app',
  downloadFile: 'KPassword-Setup-v0.9.3.exe',
  downloadPath: '/downloads/KPassword-Setup-v0.9.3.exe',
  installerSha256: '',
  releaseNotesUrl: 'https://github.com/seu-usuario/kpassword/releases',
  repositoryUrl: 'https://github.com/seu-usuario/kpassword',
  securityEmail: 'security@seudominio.com'
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/download/', label: 'Download' },
  { href: '/seguranca/', label: 'Segurança' },
  { href: '/documentacao/', label: 'Documentação' },
  { href: '/changelog/', label: 'Changelog' }
];

export const securityPillars = [
  {
    title: 'Local por padrão',
    text: 'O cofre fica no computador do usuário. Não há conta obrigatória, painel web ou nuvem exigida para usar o app.'
  },
  {
    title: 'Criptografia autenticada',
    text: 'O cofre usa AES-256-GCM, com autenticação dos dados criptografados e uso de AAD para proteger contexto adicional.'
  },
  {
    title: 'Derivação de chave com Argon2id',
    text: 'A senha mestra passa por Argon2id antes de virar material criptográfico, elevando o custo de tentativas offline.'
  },
  {
    title: 'Migração cuidadosa',
    text: 'O cryptoVersion 2, backups criptografados e backup pré-migração reduzem risco em atualizações sensíveis.'
  }
];

export const safeguards = [
  'Argon2id para derivação da chave a partir da senha mestra.',
  'AES-256-GCM para criptografia autenticada do cofre.',
  'AAD para amarrar contexto aos dados criptografados.',
  'cryptoVersion 2 para evolução controlada do formato criptográfico.',
  'Backups criptografados e backup pré-migração.',
  'Updater assinado para reduzir risco de atualização adulterada.',
  'Autolock para bloquear o cofre após inatividade.',
  'Clipboard revisado para reduzir exposição acidental ao copiar senhas.'
];

export const changelog = [
  {
    version: 'v0.9.3',
    date: '2026-07-04',
    title: 'Hardening e base para release oficial',
    items: [
      'Revisão do fluxo de segurança do cofre local/offline.',
      'Fortalecimento do ciclo de backup criptografado e backup pré-migração.',
      'Documentação de segurança preparada para publicação.',
      'Ajustes de autolock e comportamento de clipboard.',
      'Preparação do updater assinado para distribuição.'
    ]
  },
  {
    version: 'v0.9.x',
    date: '2026',
    title: 'Criptografia versão 2',
    items: [
      'Introdução do cryptoVersion 2.',
      'Uso de Argon2id, AES-256-GCM e AAD no modelo criptográfico atual.',
      'Migração pensada para reduzir risco de perda de dados.'
    ]
  },
  {
    version: 'v0.8.x',
    date: '2026',
    title: 'Diagnóstico do cofre e refinamentos de interface',
    items: [
      'Diagnóstico para senhas fracas, reutilizadas, antigas ou próximas do vencimento.',
      'Alertas de credenciais incompletas e sem TOTP.',
      'Ajustes visuais para melhorar legibilidade nos temas do app.'
    ]
  }
];
