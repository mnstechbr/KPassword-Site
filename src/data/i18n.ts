export const defaultLocale = 'pt' as const;

export const locales = {
  pt: { code: 'pt', htmlLang: 'pt-BR', label: 'Português', shortLabel: 'PT' },
  es: { code: 'es', htmlLang: 'es', label: 'Espanhol', shortLabel: 'ES' },
  en: { code: 'en', htmlLang: 'en', label: 'Inglês', shortLabel: 'EN' },
  tr: { code: 'tr', htmlLang: 'tr', label: 'Turco', shortLabel: 'TR' }
} as const;

export type Locale = keyof typeof locales;

export const pageKeys = [
  'home',
  'download',
  'security',
  'changelog',
  'docs',
  'securityPolicy',
  'termsPrivacy'
] as const;

export type PageKey = (typeof pageKeys)[number];

export const routes: Record<Locale, Record<PageKey, string>> = {
  pt: {
    home: '/',
    download: '/baixar',
    security: '/seguranca',
    changelog: '/novidades',
    docs: '/documentacao',
    securityPolicy: '/politica-de-seguranca',
    termsPrivacy: '/termos-e-privacidade'
  },
  es: {
    home: '/es/',
    download: '/es/descargar',
    security: '/es/seguridad',
    changelog: '/es/novedades',
    docs: '/es/documentacion',
    securityPolicy: '/es/politica-de-seguridad',
    termsPrivacy: '/es/terminos-y-privacidad'
  },
  en: {
    home: '/en/',
    download: '/en/download',
    security: '/en/security',
    changelog: '/en/changelog',
    docs: '/en/docs',
    securityPolicy: '/en/security-policy',
    termsPrivacy: '/en/terms-privacy'
  },
  tr: {
    home: '/tr/',
    download: '/tr/indir',
    security: '/tr/guvenlik',
    changelog: '/tr/degisiklikler',
    docs: '/tr/belgeler',
    securityPolicy: '/tr/guvenlik-politikasi',
    termsPrivacy: '/tr/kosullar-ve-gizlilik'
  }
};

export function getPath(locale: Locale, page: PageKey): string {
  return routes[locale][page];
}

export function getLocale(value?: string): Locale {
  return value && value in locales ? (value as Locale) : defaultLocale;
}

export function getPageFromSlug(locale: Locale, slug?: string): PageKey | undefined {
  const normalized = (slug || '').replace(/^\//, '').replace(/\/$/, '');
  return pageKeys.find((page) => {
    if (page === 'home') return normalized === '';
    return routes[locale][page].split('/').filter(Boolean).at(-1) === normalized;
  });
}

export const localizedLocales = (Object.keys(locales) as Locale[]).filter((locale) => locale !== defaultLocale);

export const content = {
  pt: {
    siteTitleSuffix: 'gerenciador de senhas local e sem internet',
    siteDescription: 'Guarde credenciais no seu computador, sem conta e sem nuvem obrigatória.',
    nav: { home: 'Início', download: 'Baixar', security: 'Segurança', changelog: 'Novidades' },
    language: { aria: 'Escolher idioma', label: 'Idioma' },
    header: { cta: 'Baixar' },
    footer: {
      description: 'Gerenciador de senhas local e sem internet para Windows.',
      docs: 'Documentação',
      securityPolicy: 'Política de segurança',
      termsPrivacy: 'Termos e privacidade',
      github: 'GitHub'
    },
    common: {
      dateMissing: 'data não informada',
      sizeMissing: 'tamanho não informado',
      localRelease: 'lançamento local',
      openRelease: 'Abrir lançamento',
      githubNotConfigured: 'GitHub não configurado'
    },
    releaseBadge: { label: 'Última versão' },
    home: {
      metaTitle: '',
      metaDescription: 'KPassword é um gerenciador de senhas local e sem internet para Windows.',
      label: 'Senha guardada em casa, sem cofre pendurado na nuvem.',
      lead: 'Gerenciador de senhas local e sem internet para Windows.',
      text: 'Sem conta. Sem nuvem obrigatória. O cofre fica no seu computador, com criptografia moderna e foco em uso local.',
      primary: 'Baixar para Windows',
      secondary: 'Ver segurança',
      fineprintConfigured: 'O download usa o último lançamento publicado no GitHub.',
      fineprintPending: 'O link do GitHub será configurado automaticamente pelo script ao detectar o repositório do app.',
      vaultAria: 'Resumo do KPassword',
      vaultSmall: 'cofre.local',
      vaultTitle: 'Sem internet por padrão',
      vaultItems: ['Argon2id', 'AES-256-GCM + AAD', 'Backups criptografados', 'Atualizador assinado'],
      sectionLabel: 'O essencial',
      sectionTitle: 'Feito para controle local.',
      cards: [
        { title: 'Local e sem internet', text: 'O KPassword não exige conta nem nuvem obrigatória. Seus dados ficam no ambiente do seu Windows.' },
        { title: 'Criptografia autenticada', text: 'O cofre usa Argon2id e AES-256-GCM com AAD no formato cryptoVersion 2.' },
        { title: 'Manutenção cuidadosa', text: 'Backups criptografados, backup pré-migração, bloqueio automático, área de transferência revisada e atualizador assinado.' }
      ],
      transparencyLabel: 'Transparência',
      transparencyTitle: 'Segurança sem promessas mágicas.',
      transparencyText: 'O objetivo é reduzir riscos com boas escolhas técnicas, documentação clara e atualizações assinadas. Nenhum software deve prometer segurança absoluta, e o KPassword não promete.'
    },
    download: {
      metaTitle: 'Baixar',
      metaDescription: 'Baixe o KPassword para Windows pelo último lançamento publicado no GitHub.',
      label: 'Baixar',
      title: 'Baixar KPassword para Windows',
      description: 'O site procura automaticamente o instalador .exe no lançamento mais recente do GitHub.',
      detectedVersion: 'Versão detectada',
      fallbackName: 'KPassword para Windows',
      repoMissing: 'repositório ainda não detectado',
      published: 'Publicado',
      shownInstaller: 'Instalador exibido',
      detectedOnClick: 'Detectado no clique',
      size: 'Tamanho',
      downloadButton: 'Baixar instalador',
      viewRelease: 'Ver lançamento no GitHub',
      helper: 'O botão consulta o lançamento mais recente e baixa o arquivo .exe do KPassword, mesmo quando o nome contém a versão.',
      disabled: 'Link do GitHub não configurado',
      disabledHelp: 'Configure o repositório do GitHub para ativar o download automático.',
      howTitle: 'Como o botão escolhe o arquivo',
      howTextBefore: 'Fonte configurada:',
      howTextAfter: 'No clique, o site consulta o último lançamento, procura primeiro',
      howTextFinal: 'e, se não existir, procura um instalador como',
      client: {
        searching: 'Procurando último instalador…',
        found: 'Download encontrado. Abrindo…',
        openingRelease: 'Abrindo lançamento no GitHub…',
        apiMissing: 'API do GitHub não configurada.',
        installerMissing: 'Nenhum instalador .exe encontrado no último lançamento.'
      }
    },
    security: {
      metaTitle: 'Segurança',
      metaDescription: 'Como o KPassword protege o cofre local sem prometer segurança absoluta.',
      label: 'Segurança',
      title: 'Proteção local, explicada sem fumaça.',
      description: 'O KPassword foi desenhado para manter credenciais no computador do usuário, com criptografia autenticada e mecanismos de redução de risco.',
      cards: [
        { title: 'Derivação de chave', text: 'Argon2id transforma a senha mestra em material criptográfico adequado para proteger o cofre.' },
        { title: 'Cofre autenticado', text: 'AES-256-GCM com AAD protege confidencialidade e integridade dos dados salvos.' },
        { title: 'Evolução controlada', text: 'cryptoVersion 2 permite migrar o formato do cofre com mais previsibilidade.' }
      ],
      summaryTitle: 'Resumo técnico',
      bullets: [
        'Cofre local, sem conta e sem sincronização obrigatória.',
        'Argon2id para derivação da chave a partir da senha mestra.',
        'AES-256-GCM com AAD para criptografia autenticada do cofre.',
        'cryptoVersion 2 para evolução controlada do formato criptográfico.',
        'Backups criptografados e backup pré-migração.',
        'Atualizador assinado, bloqueio automático e área de transferência revisada.'
      ],
      noHypeLabel: 'Sem exagero',
      noHypeTitle: 'O que o KPassword não promete',
      noHypeText: 'Não existe segurança absoluta. O app busca boas práticas, atualização cuidadosa e transparência. A proteção também depende de uma senha mestra forte, do estado do Windows, de backups seguros e de hábitos do usuário.',
      docsTitle: 'Quer detalhes de uso?',
      docsButton: 'Abrir documentação'
    },
    changelog: {
      metaTitle: 'Novidades',
      metaDescription: 'Histórico de versões do KPassword sincronizado com os lançamentos do GitHub.',
      label: 'Novidades',
      title: 'Atualizações do KPassword',
      description: 'Esta página usa os lançamentos do GitHub como fonte. O conteúdo estático vem da geração do site, e o navegador tenta atualizar a lista ao abrir a página.',
      source: 'Fonte',
      githubSource: 'Lançamentos do GitHub de',
      localFallback: 'Fallback local até detectar o repositório',
      viewAll: 'Ver todos no GitHub',
      viewMore: 'Ver mais no GitHub',
      noNotes: 'Sem notas publicadas para esta versão.',
      updatedSource: 'Lançamentos do GitHub, atualizados ao abrir esta página',
      releaseTitle: 'Lançamento'
    },
    docs: {
      metaTitle: 'Documentação',
      metaDescription: 'Guia rápido para instalar, usar e manter o KPassword.',
      label: 'Documentação',
      title: 'Guia rápido',
      description: 'Poucas instruções, sem floresta de texto. O suficiente para instalar e usar com cuidado.',
      steps: [
        { title: '1. Instale', text: 'Baixe o instalador pelo último lançamento do GitHub e execute no Windows.' },
        { title: '2. Crie sua senha mestra', text: 'Use uma frase longa e única. Ela protege o acesso ao cofre local.' },
        { title: '3. Cadastre credenciais', text: 'Salve login, senha, site, notas, TOTP e demais campos necessários.' },
        { title: '4. Faça backup', text: 'Mantenha backups criptografados em local seguro. Não dependa de uma única cópia.' }
      ],
      recommendationsTitle: 'Recomendações práticas',
      recommendations: [
        'Não reutilize a senha mestra em outros serviços.',
        'Mantenha o Windows atualizado.',
        'Confira o lançamento no GitHub antes de instalar atualizações importantes.',
        'Guarde backups em mídia confiável e protegida.',
        'Bloqueie o app ao se afastar do computador.'
      ],
      ctaTitle: 'Pronto para instalar?',
      ctaButton: 'Ir para baixar'
    },
    securityPolicy: {
      metaTitle: 'Política de segurança',
      metaDescription: 'Como reportar problemas de segurança no KPassword.',
      label: 'Política de segurança',
      title: 'Como reportar uma falha',
      description: 'Relatórios responsáveis ajudam a proteger usuários sem expor detalhes antes da correção.',
      contactTitle: 'Contato',
      contactTextBefore: 'Envie informações para',
      contactTextAfter: 'Inclua versão do app, sistema operacional, passos para reproduzir, impacto esperado e evidências mínimas.',
      avoidTitle: 'O que evitar',
      avoid: [
        'Não publique detalhes exploráveis antes de uma correção.',
        'Não acesse dados de terceiros.',
        'Não tente persistência, exfiltração ou ações destrutivas.'
      ],
      githubTitle: 'GitHub',
      githubText: 'Quando apropriado, também use a área de segurança do repositório:',
      githubLinkLabel: 'Avisos de segurança'
    },
    termsPrivacy: {
      metaTitle: 'Termos e privacidade',
      metaDescription: 'Termos básicos e privacidade do site do KPassword.',
      label: 'Termos e privacidade',
      title: 'Uso do site e privacidade',
      description: 'Um resumo simples para o site oficial do KPassword.',
      sections: [
        { title: 'Privacidade do site', text: 'Este site é estático. Por padrão, ele não precisa de conta, login ou envio de dados pessoais para funcionar.' },
        { title: 'Downloads', text: 'O botão de baixar pode redirecionar para arquivos hospedados nos lançamentos do GitHub. Nesse caso, a navegação e o download seguem também as regras da plataforma que hospeda o arquivo.' },
        { title: 'Uso do software', text: 'O KPassword é oferecido como ferramenta local. O usuário é responsável por manter senha mestra, sistema operacional, backups e cópias de segurança com cuidado.' },
        { title: 'Limitação', text: 'O projeto busca boas práticas de segurança, mas não promete proteção absoluta contra todos os cenários possíveis.' }
      ]
    },
    notFound: {
      metaTitle: 'Página não encontrada',
      label: '404',
      title: 'Essa porta do cofre não existe.',
      text: 'O endereço pode ter mudado ou sido digitado com algum parafuso a mais.',
      button: 'Voltar para o início'
    }
  },
  es: {
    siteTitleSuffix: 'gestor de contraseñas local y sin conexión',
    siteDescription: 'Guarda credenciales en tu computadora, sin cuenta y sin nube obligatoria.',
    nav: { home: 'Inicio', download: 'Descargar', security: 'Seguridad', changelog: 'Novedades' },
    language: { aria: 'Elegir idioma', label: 'Idioma' },
    header: { cta: 'Descargar' },
    footer: {
      description: 'Gestor de contraseñas local y sin conexión para Windows.',
      docs: 'Documentación',
      securityPolicy: 'Política de seguridad',
      termsPrivacy: 'Términos y privacidad',
      github: 'GitHub'
    },
    common: {
      dateMissing: 'fecha no informada',
      sizeMissing: 'tamaño no informado',
      localRelease: 'publicación local',
      openRelease: 'Abrir publicación',
      githubNotConfigured: 'GitHub no configurado'
    },
    releaseBadge: { label: 'Última versión' },
    home: {
      metaTitle: '',
      metaDescription: 'KPassword es un gestor de contraseñas local y sin conexión para Windows.',
      label: 'Contraseñas guardadas en casa, sin caja fuerte colgada de la nube.',
      lead: 'Gestor de contraseñas local y sin conexión para Windows.',
      text: 'Sin cuenta. Sin nube obligatoria. La caja fuerte queda en tu computadora, con criptografía moderna y foco en el uso local.',
      primary: 'Descargar para Windows',
      secondary: 'Ver seguridad',
      fineprintConfigured: 'La descarga usa la última publicación disponible en GitHub.',
      fineprintPending: 'El enlace de GitHub será configurado automáticamente por el script al detectar el repositorio de la app.',
      vaultAria: 'Resumen de KPassword',
      vaultSmall: 'caja.local',
      vaultTitle: 'Sin conexión por defecto',
      vaultItems: ['Argon2id', 'AES-256-GCM + AAD', 'Copias cifradas', 'Actualizador firmado'],
      sectionLabel: 'Lo esencial',
      sectionTitle: 'Hecho para control local.',
      cards: [
        { title: 'Local y sin conexión', text: 'KPassword no exige cuenta ni nube obligatoria. Tus datos quedan en el entorno de Windows.' },
        { title: 'Cifrado autenticado', text: 'La caja fuerte usa Argon2id y AES-256-GCM con AAD en el formato cryptoVersion 2.' },
        { title: 'Mantenimiento cuidadoso', text: 'Copias cifradas, copia previa a migración, bloqueo automático, portapapeles revisado y actualizador firmado.' }
      ],
      transparencyLabel: 'Transparencia',
      transparencyTitle: 'Seguridad sin promesas mágicas.',
      transparencyText: 'El objetivo es reducir riesgos con buenas decisiones técnicas, documentación clara y actualizaciones firmadas. Ningún software debe prometer seguridad absoluta, y KPassword no lo hace.'
    },
    download: {
      metaTitle: 'Descargar',
      metaDescription: 'Descarga KPassword para Windows desde la última publicación disponible en GitHub.',
      label: 'Descargar',
      title: 'Descargar KPassword para Windows',
      description: 'El sitio busca automáticamente el instalador .exe en la publicación más reciente de GitHub.',
      detectedVersion: 'Versión detectada',
      fallbackName: 'KPassword para Windows',
      repoMissing: 'repositorio aún no detectado',
      published: 'Publicado',
      shownInstaller: 'Instalador mostrado',
      detectedOnClick: 'Detectado al hacer clic',
      size: 'Tamaño',
      downloadButton: 'Descargar instalador',
      viewRelease: 'Ver publicación en GitHub',
      helper: 'El botón consulta la publicación más reciente y descarga el archivo .exe de KPassword, incluso cuando el nombre contiene la versión.',
      disabled: 'Enlace de GitHub no configurado',
      disabledHelp: 'Configura el repositorio de GitHub para activar la descarga automática.',
      howTitle: 'Cómo el botón elige el archivo',
      howTextBefore: 'Fuente configurada:',
      howTextAfter: 'Al hacer clic, el sitio consulta la última publicación, busca primero',
      howTextFinal: 'y, si no existe, busca un instalador como',
      client: {
        searching: 'Buscando el último instalador…',
        found: 'Descarga encontrada. Abriendo…',
        openingRelease: 'Abriendo publicación en GitHub…',
        apiMissing: 'API de GitHub no configurada.',
        installerMissing: 'No se encontró ningún instalador .exe en la última publicación.'
      }
    },
    security: {
      metaTitle: 'Seguridad',
      metaDescription: 'Cómo KPassword protege la caja fuerte local sin prometer seguridad absoluta.',
      label: 'Seguridad',
      title: 'Protección local, explicada sin humo.',
      description: 'KPassword fue diseñado para mantener credenciales en la computadora del usuario, con cifrado autenticado y mecanismos de reducción de riesgo.',
      cards: [
        { title: 'Derivación de clave', text: 'Argon2id transforma la contraseña maestra en material criptográfico adecuado para proteger la caja fuerte.' },
        { title: 'Caja fuerte autenticada', text: 'AES-256-GCM con AAD protege la confidencialidad e integridad de los datos guardados.' },
        { title: 'Evolución controlada', text: 'cryptoVersion 2 permite migrar el formato de la caja fuerte con mayor previsibilidad.' }
      ],
      summaryTitle: 'Resumen técnico',
      bullets: [
        'Caja fuerte local, sin cuenta y sin sincronización obligatoria.',
        'Argon2id para derivar la clave desde la contraseña maestra.',
        'AES-256-GCM con AAD para cifrado autenticado de la caja fuerte.',
        'cryptoVersion 2 para evolución controlada del formato criptográfico.',
        'Copias cifradas y copia previa a migración.',
        'Actualizador firmado, bloqueo automático y portapapeles revisado.'
      ],
      noHypeLabel: 'Sin exagerar',
      noHypeTitle: 'Lo que KPassword no promete',
      noHypeText: 'No existe la seguridad absoluta. La app busca buenas prácticas, actualizaciones cuidadosas y transparencia. La protección también depende de una contraseña maestra fuerte, del estado de Windows, de copias seguras y de los hábitos del usuario.',
      docsTitle: '¿Quieres detalles de uso?',
      docsButton: 'Abrir documentación'
    },
    changelog: {
      metaTitle: 'Novedades',
      metaDescription: 'Historial de versiones de KPassword sincronizado con las publicaciones de GitHub.',
      label: 'Novedades',
      title: 'Actualizaciones de KPassword',
      description: 'Esta página usa las publicaciones de GitHub como fuente. El contenido estático viene de la generación del sitio, y el navegador intenta actualizar la lista al abrir la página.',
      source: 'Fuente',
      githubSource: 'Publicaciones de GitHub de',
      localFallback: 'Respaldo local hasta detectar el repositorio',
      viewAll: 'Ver todas en GitHub',
      viewMore: 'Ver más en GitHub',
      noNotes: 'Sin notas publicadas para esta versión.',
      updatedSource: 'Publicaciones de GitHub, actualizadas al abrir esta página',
      releaseTitle: 'Publicación'
    },
    docs: {
      metaTitle: 'Documentación',
      metaDescription: 'Guía rápida para instalar, usar y mantener KPassword.',
      label: 'Documentación',
      title: 'Guía rápida',
      description: 'Pocas instrucciones, sin bosque de texto. Lo suficiente para instalar y usar con cuidado.',
      steps: [
        { title: '1. Instala', text: 'Descarga el instalador desde la última publicación de GitHub y ejecútalo en Windows.' },
        { title: '2. Crea tu contraseña maestra', text: 'Usa una frase larga y única. Protege el acceso a la caja fuerte local.' },
        { title: '3. Registra credenciales', text: 'Guarda usuario, contraseña, sitio, notas, TOTP y los demás campos necesarios.' },
        { title: '4. Haz copias', text: 'Mantén copias cifradas en un lugar seguro. No dependas de una única copia.' }
      ],
      recommendationsTitle: 'Recomendaciones prácticas',
      recommendations: [
        'No reutilices la contraseña maestra en otros servicios.',
        'Mantén Windows actualizado.',
        'Revisa la publicación en GitHub antes de instalar actualizaciones importantes.',
        'Guarda copias en medios confiables y protegidos.',
        'Bloquea la app al alejarte de la computadora.'
      ],
      ctaTitle: '¿Listo para instalar?',
      ctaButton: 'Ir a descargar'
    },
    securityPolicy: {
      metaTitle: 'Política de seguridad',
      metaDescription: 'Cómo reportar problemas de seguridad en KPassword.',
      label: 'Política de seguridad',
      title: 'Cómo reportar una falla',
      description: 'Los reportes responsables ayudan a proteger usuarios sin exponer detalles antes de la corrección.',
      contactTitle: 'Contacto',
      contactTextBefore: 'Envía información a',
      contactTextAfter: 'Incluye versión de la app, sistema operativo, pasos para reproducir, impacto esperado y evidencias mínimas.',
      avoidTitle: 'Qué evitar',
      avoid: [
        'No publiques detalles explotables antes de una corrección.',
        'No accedas a datos de terceros.',
        'No intentes persistencia, exfiltración ni acciones destructivas.'
      ],
      githubTitle: 'GitHub',
      githubText: 'Cuando corresponda, usa también el área de seguridad del repositorio:',
      githubLinkLabel: 'Avisos de seguridad'
    },
    termsPrivacy: {
      metaTitle: 'Términos y privacidad',
      metaDescription: 'Términos básicos y privacidad del sitio de KPassword.',
      label: 'Términos y privacidad',
      title: 'Uso del sitio y privacidad',
      description: 'Un resumen simple para el sitio oficial de KPassword.',
      sections: [
        { title: 'Privacidad del sitio', text: 'Este sitio es estático. Por defecto, no necesita cuenta, inicio de sesión ni envío de datos personales para funcionar.' },
        { title: 'Descargas', text: 'El botón de descarga puede redirigir a archivos alojados en las publicaciones de GitHub. En ese caso, la navegación y la descarga siguen también las reglas de la plataforma que aloja el archivo.' },
        { title: 'Uso del software', text: 'KPassword se ofrece como herramienta local. El usuario es responsable de cuidar la contraseña maestra, el sistema operativo, las copias y los respaldos.' },
        { title: 'Limitación', text: 'El proyecto busca buenas prácticas de seguridad, pero no promete protección absoluta contra todos los escenarios posibles.' }
      ]
    },
    notFound: {
      metaTitle: 'Página no encontrada',
      label: '404',
      title: 'Esa puerta de la caja fuerte no existe.',
      text: 'La dirección puede haber cambiado o haber sido escrita con un tornillo de más.',
      button: 'Volver al inicio'
    }
  },
  en: {
    siteTitleSuffix: 'local password manager',
    siteDescription: 'Store credentials on your computer, with no account and no required cloud.',
    nav: { home: 'Home', download: 'Download', security: 'Security', changelog: 'Updates' },
    language: { aria: 'Choose language', label: 'Language' },
    header: { cta: 'Download' },
    footer: {
      description: 'Local password manager for Windows.',
      docs: 'Documentation',
      securityPolicy: 'Security policy',
      termsPrivacy: 'Terms and privacy',
      github: 'GitHub'
    },
    common: {
      dateMissing: 'date not provided',
      sizeMissing: 'size not provided',
      localRelease: 'local release',
      openRelease: 'Open release',
      githubNotConfigured: 'GitHub not configured'
    },
    releaseBadge: { label: 'Latest version' },
    home: {
      metaTitle: '',
      metaDescription: 'KPassword is a local password manager for Windows.',
      label: 'Passwords kept at home, without hanging your vault from the cloud.',
      lead: 'Local password manager for Windows.',
      text: 'No account. No required cloud. The vault stays on your computer, with modern cryptography and a local-first design.',
      primary: 'Download for Windows',
      secondary: 'View security',
      fineprintConfigured: 'The download uses the latest release published on GitHub.',
      fineprintPending: 'The GitHub link will be configured automatically by the script when it detects the app repository.',
      vaultAria: 'KPassword summary',
      vaultSmall: 'local.vault',
      vaultTitle: 'Local by default',
      vaultItems: ['Argon2id', 'AES-256-GCM + AAD', 'Encrypted backups', 'Signed updater'],
      sectionLabel: 'The essentials',
      sectionTitle: 'Built for local control.',
      cards: [
        { title: 'Local by design', text: 'KPassword does not require an account or mandatory cloud storage. Your data stays in your Windows environment.' },
        { title: 'Authenticated encryption', text: 'The vault uses Argon2id and AES-256-GCM with AAD in the cryptoVersion 2 format.' },
        { title: 'Careful maintenance', text: 'Encrypted backups, pre-migration backup, automatic lock, revised clipboard handling and a signed updater.' }
      ],
      transparencyLabel: 'Transparency',
      transparencyTitle: 'Security without magic promises.',
      transparencyText: 'The goal is to reduce risk with careful technical choices, clear documentation and signed updates. No software should promise absolute security, and KPassword does not.'
    },
    download: {
      metaTitle: 'Download',
      metaDescription: 'Download KPassword for Windows from the latest release published on GitHub.',
      label: 'Download',
      title: 'Download KPassword for Windows',
      description: 'The site automatically looks for the .exe installer in the latest GitHub release.',
      detectedVersion: 'Detected version',
      fallbackName: 'KPassword for Windows',
      repoMissing: 'repository not detected yet',
      published: 'Published',
      shownInstaller: 'Shown installer',
      detectedOnClick: 'Detected on click',
      size: 'Size',
      downloadButton: 'Download installer',
      viewRelease: 'View release on GitHub',
      helper: 'The button checks the latest release and downloads the KPassword .exe file, even when the file name includes the version.',
      disabled: 'GitHub link not configured',
      disabledHelp: 'Configure the GitHub repository to enable automatic download.',
      howTitle: 'How the button chooses the file',
      howTextBefore: 'Configured source:',
      howTextAfter: 'On click, the site checks the latest release, first looks for',
      howTextFinal: 'and, if it does not exist, looks for an installer such as',
      client: {
        searching: 'Looking for the latest installer…',
        found: 'Download found. Opening…',
        openingRelease: 'Opening release on GitHub…',
        apiMissing: 'GitHub API not configured.',
        installerMissing: 'No .exe installer found in the latest release.'
      }
    },
    security: {
      metaTitle: 'Security',
      metaDescription: 'How KPassword protects the local vault without promising absolute security.',
      label: 'Security',
      title: 'Local protection, explained without fog.',
      description: 'KPassword is designed to keep credentials on the user’s computer, with authenticated encryption and risk-reduction mechanisms.',
      cards: [
        { title: 'Key derivation', text: 'Argon2id turns the master password into cryptographic material suitable for protecting the vault.' },
        { title: 'Authenticated vault', text: 'AES-256-GCM with AAD protects confidentiality and integrity of stored data.' },
        { title: 'Controlled evolution', text: 'cryptoVersion 2 allows the vault format to migrate with better predictability.' }
      ],
      summaryTitle: 'Technical summary',
      bullets: [
        'Local vault, with no account and no mandatory sync.',
        'Argon2id for deriving the key from the master password.',
        'AES-256-GCM with AAD for authenticated vault encryption.',
        'cryptoVersion 2 for controlled evolution of the cryptographic format.',
        'Encrypted backups and pre-migration backup.',
        'Signed updater, automatic lock and revised clipboard handling.'
      ],
      noHypeLabel: 'No hype',
      noHypeTitle: 'What KPassword does not promise',
      noHypeText: 'Absolute security does not exist. The app aims for good practices, careful updates and transparency. Protection also depends on a strong master password, the state of Windows, safe backups and user habits.',
      docsTitle: 'Want usage details?',
      docsButton: 'Open documentation'
    },
    changelog: {
      metaTitle: 'Updates',
      metaDescription: 'KPassword version history synchronized with GitHub releases.',
      label: 'Updates',
      title: 'KPassword updates',
      description: 'This page uses GitHub releases as its source. Static content comes from the site build, and the browser tries to refresh the list when the page opens.',
      source: 'Source',
      githubSource: 'GitHub releases from',
      localFallback: 'Local fallback until the repository is detected',
      viewAll: 'View all on GitHub',
      viewMore: 'See more on GitHub',
      noNotes: 'No notes published for this version.',
      updatedSource: 'GitHub releases, refreshed when this page opened',
      releaseTitle: 'Release'
    },
    docs: {
      metaTitle: 'Documentation',
      metaDescription: 'Quick guide to install, use and maintain KPassword.',
      label: 'Documentation',
      title: 'Quick guide',
      description: 'A few instructions, no text jungle. Just enough to install and use it carefully.',
      steps: [
        { title: '1. Install', text: 'Download the installer from the latest GitHub release and run it on Windows.' },
        { title: '2. Create your master password', text: 'Use a long and unique phrase. It protects access to the local vault.' },
        { title: '3. Add credentials', text: 'Save login, password, site, notes, TOTP and any other needed fields.' },
        { title: '4. Back up', text: 'Keep encrypted backups in a safe place. Do not rely on a single copy.' }
      ],
      recommendationsTitle: 'Practical recommendations',
      recommendations: [
        'Do not reuse the master password on other services.',
        'Keep Windows updated.',
        'Check the GitHub release before installing important updates.',
        'Store backups on trusted and protected media.',
        'Lock the app when you step away from the computer.'
      ],
      ctaTitle: 'Ready to install?',
      ctaButton: 'Go to download'
    },
    securityPolicy: {
      metaTitle: 'Security policy',
      metaDescription: 'How to report security issues in KPassword.',
      label: 'Security policy',
      title: 'How to report a flaw',
      description: 'Responsible reports help protect users without exposing details before a fix is available.',
      contactTitle: 'Contact',
      contactTextBefore: 'Send information to',
      contactTextAfter: 'Include app version, operating system, reproduction steps, expected impact and minimal evidence.',
      avoidTitle: 'What to avoid',
      avoid: [
        'Do not publish exploitable details before a fix.',
        'Do not access third-party data.',
        'Do not attempt persistence, exfiltration or destructive actions.'
      ],
      githubTitle: 'GitHub',
      githubText: 'When appropriate, also use the repository security area:',
      githubLinkLabel: 'Security advisories'
    },
    termsPrivacy: {
      metaTitle: 'Terms and privacy',
      metaDescription: 'Basic terms and privacy for the KPassword site.',
      label: 'Terms and privacy',
      title: 'Site use and privacy',
      description: 'A simple summary for the official KPassword site.',
      sections: [
        { title: 'Site privacy', text: 'This site is static. By default, it does not need an account, login or personal data submission to work.' },
        { title: 'Downloads', text: 'The download button may redirect to files hosted in GitHub releases. In that case, browsing and downloads also follow the rules of the platform hosting the file.' },
        { title: 'Software use', text: 'KPassword is provided as a local tool. The user is responsible for carefully maintaining the master password, operating system, backups and recovery copies.' },
        { title: 'Limitation', text: 'The project aims for good security practices, but does not promise absolute protection against every possible scenario.' }
      ]
    },
    notFound: {
      metaTitle: 'Page not found',
      label: '404',
      title: 'This vault door does not exist.',
      text: 'The address may have changed or been typed with one extra screw.',
      button: 'Back to home'
    }
  },
  tr: {
    siteTitleSuffix: 'yerel parola yöneticisi',
    siteDescription: 'Kimlik bilgilerini bilgisayarında sakla; hesap yok, zorunlu bulut yok.',
    nav: { home: 'Başlangıç', download: 'İndir', security: 'Güvenlik', changelog: 'Yenilikler' },
    language: { aria: 'Dil seç', label: 'Dil' },
    header: { cta: 'İndir' },
    footer: {
      description: 'Windows için yerel parola yöneticisi.',
      docs: 'Belgeler',
      securityPolicy: 'Güvenlik politikası',
      termsPrivacy: 'Koşullar ve gizlilik',
      github: 'GitHub'
    },
    common: {
      dateMissing: 'tarih belirtilmedi',
      sizeMissing: 'boyut belirtilmedi',
      localRelease: 'yerel yayın',
      openRelease: 'Yayını aç',
      githubNotConfigured: 'GitHub yapılandırılmadı'
    },
    releaseBadge: { label: 'Son sürüm' },
    home: {
      metaTitle: '',
      metaDescription: 'KPassword, Windows için yerel bir parola yöneticisidir.',
      label: 'Parolalar evde kalır; kasa buluta asılmaz.',
      lead: 'Windows için yerel parola yöneticisi.',
      text: 'Hesap yok. Zorunlu bulut yok. Kasa bilgisayarında kalır; modern kriptografi ve yerel kullanım odağıyla çalışır.',
      primary: 'Windows için indir',
      secondary: 'Güvenliği gör',
      fineprintConfigured: 'İndirme, GitHub’da yayımlanan son sürümü kullanır.',
      fineprintPending: 'GitHub bağlantısı, script uygulama deposunu algıladığında otomatik yapılandırılır.',
      vaultAria: 'KPassword özeti',
      vaultSmall: 'yerel.kasa',
      vaultTitle: 'Varsayılan olarak yerel',
      vaultItems: ['Argon2id', 'AES-256-GCM + AAD', 'Şifreli yedekler', 'İmzalı güncelleyici'],
      sectionLabel: 'Temel bilgiler',
      sectionTitle: 'Yerel denetim için yapıldı.',
      cards: [
        { title: 'Yerel tasarım', text: 'KPassword hesap veya zorunlu bulut depolama istemez. Verilerin Windows ortamında kalır.' },
        { title: 'Kimliği doğrulanmış şifreleme', text: 'Kasa, cryptoVersion 2 biçiminde Argon2id ve AAD ile AES-256-GCM kullanır.' },
        { title: 'Özenli bakım', text: 'Şifreli yedekler, geçiş öncesi yedek, otomatik kilit, gözden geçirilmiş pano kullanımı ve imzalı güncelleyici.' }
      ],
      transparencyLabel: 'Şeffaflık',
      transparencyTitle: 'Büyülü vaatler olmadan güvenlik.',
      transparencyText: 'Amaç; dikkatli teknik seçimler, açık belgeler ve imzalı güncellemelerle riski azaltmaktır. Hiçbir yazılım mutlak güvenlik vadetmemelidir; KPassword da bunu vadetmez.'
    },
    download: {
      metaTitle: 'İndir',
      metaDescription: 'KPassword’ı Windows için GitHub’da yayımlanan son sürümden indir.',
      label: 'İndir',
      title: 'Windows için KPassword’ı indir',
      description: 'Site, en güncel GitHub yayınındaki .exe kurulum dosyasını otomatik arar.',
      detectedVersion: 'Algılanan sürüm',
      fallbackName: 'Windows için KPassword',
      repoMissing: 'depo henüz algılanmadı',
      published: 'Yayımlandı',
      shownInstaller: 'Gösterilen kurulum dosyası',
      detectedOnClick: 'Tıklamada algılanır',
      size: 'Boyut',
      downloadButton: 'Kurulum dosyasını indir',
      viewRelease: 'GitHub’da yayını gör',
      helper: 'Düğme son yayını denetler ve dosya adı sürümü içerse bile KPassword .exe dosyasını indirir.',
      disabled: 'GitHub bağlantısı yapılandırılmadı',
      disabledHelp: 'Otomatik indirmeyi etkinleştirmek için GitHub deposunu yapılandır.',
      howTitle: 'Düğme dosyayı nasıl seçer',
      howTextBefore: 'Yapılandırılmış kaynak:',
      howTextAfter: 'Tıklamada site son yayını denetler, önce şunu arar:',
      howTextFinal: 've yoksa şuna benzer bir kurulum dosyası arar:',
      client: {
        searching: 'Son kurulum dosyası aranıyor…',
        found: 'İndirme bulundu. Açılıyor…',
        openingRelease: 'GitHub yayını açılıyor…',
        apiMissing: 'GitHub API yapılandırılmadı.',
        installerMissing: 'Son yayında .exe kurulum dosyası bulunamadı.'
      }
    },
    security: {
      metaTitle: 'Güvenlik',
      metaDescription: 'KPassword’ın mutlak güvenlik vadetmeden yerel kasayı nasıl koruduğu.',
      label: 'Güvenlik',
      title: 'Yerel koruma, sis perdesi olmadan.',
      description: 'KPassword, kimlik bilgilerini kullanıcının bilgisayarında tutmak; kimliği doğrulanmış şifreleme ve risk azaltma mekanizmaları kullanmak için tasarlandı.',
      cards: [
        { title: 'Anahtar türetme', text: 'Argon2id, ana parolayı kasayı korumaya uygun kriptografik malzemeye dönüştürür.' },
        { title: 'Kimliği doğrulanmış kasa', text: 'AAD ile AES-256-GCM, kayıtlı verilerin gizliliğini ve bütünlüğünü korur.' },
        { title: 'Kontrollü gelişim', text: 'cryptoVersion 2, kasa biçiminin daha öngörülebilir biçimde taşınmasını sağlar.' }
      ],
      summaryTitle: 'Teknik özet',
      bullets: [
        'Yerel kasa; hesap yok, zorunlu eşitleme yok.',
        'Ana paroladan anahtar türetmek için Argon2id.',
        'Kasa için kimliği doğrulanmış şifrelemede AAD ile AES-256-GCM.',
        'Kriptografik biçimin kontrollü gelişimi için cryptoVersion 2.',
        'Şifreli yedekler ve geçiş öncesi yedek.',
        'İmzalı güncelleyici, otomatik kilit ve gözden geçirilmiş pano kullanımı.'
      ],
      noHypeLabel: 'Abartısız',
      noHypeTitle: 'KPassword ne vadetmez',
      noHypeText: 'Mutlak güvenlik diye bir şey yoktur. Uygulama iyi uygulamalar, dikkatli güncellemeler ve şeffaflık hedefler. Koruma ayrıca güçlü bir ana parolaya, Windows’un durumuna, güvenli yedeklere ve kullanıcı alışkanlıklarına bağlıdır.',
      docsTitle: 'Kullanım ayrıntıları mı?',
      docsButton: 'Belgeleri aç'
    },
    changelog: {
      metaTitle: 'Yenilikler',
      metaDescription: 'GitHub yayınlarıyla eşitlenen KPassword sürüm geçmişi.',
      label: 'Yenilikler',
      title: 'KPassword güncellemeleri',
      description: 'Bu sayfa kaynak olarak GitHub yayınlarını kullanır. Statik içerik site oluşturulurken gelir; tarayıcı sayfa açıldığında listeyi yenilemeyi dener.',
      source: 'Kaynak',
      githubSource: 'GitHub yayınları:',
      localFallback: 'Depo algılanana kadar yerel yedek',
      viewAll: 'Tümünü GitHub’da gör',
      viewMore: 'GitHub’da daha fazlasını gör',
      noNotes: 'Bu sürüm için not yayımlanmadı.',
      updatedSource: 'GitHub yayınları, bu sayfa açıldığında yenilendi',
      releaseTitle: 'Yayın'
    },
    docs: {
      metaTitle: 'Belgeler',
      metaDescription: 'KPassword’ı kurmak, kullanmak ve bakımını yapmak için hızlı kılavuz.',
      label: 'Belgeler',
      title: 'Hızlı kılavuz',
      description: 'Az talimat, metin ormanı yok. Dikkatli kurmak ve kullanmak için yeterli olanlar.',
      steps: [
        { title: '1. Kur', text: 'Kurulum dosyasını son GitHub yayınından indir ve Windows’ta çalıştır.' },
        { title: '2. Ana parolanı oluştur', text: 'Uzun ve benzersiz bir ifade kullan. Yerel kasaya erişimi o korur.' },
        { title: '3. Kimlik bilgileri ekle', text: 'Kullanıcı adı, parola, site, notlar, TOTP ve gereken diğer alanları kaydet.' },
        { title: '4. Yedekle', text: 'Şifreli yedekleri güvenli bir yerde tut. Tek kopyaya güvenme.' }
      ],
      recommendationsTitle: 'Pratik öneriler',
      recommendations: [
        'Ana parolayı başka hizmetlerde yeniden kullanma.',
        'Windows’u güncel tut.',
        'Önemli güncellemeleri kurmadan önce GitHub yayınını denetle.',
        'Yedekleri güvenilir ve korumalı ortamlarda sakla.',
        'Bilgisayardan ayrılırken uygulamayı kilitle.'
      ],
      ctaTitle: 'Kurmaya hazır mısın?',
      ctaButton: 'İndirmeye git'
    },
    securityPolicy: {
      metaTitle: 'Güvenlik politikası',
      metaDescription: 'KPassword güvenlik sorunları nasıl bildirilir.',
      label: 'Güvenlik politikası',
      title: 'Bir açık nasıl bildirilir',
      description: 'Sorumlu bildirimler, düzeltme çıkmadan ayrıntıları yaymadan kullanıcıları korumaya yardım eder.',
      contactTitle: 'İletişim',
      contactTextBefore: 'Bilgileri şuraya gönder:',
      contactTextAfter: 'Uygulama sürümünü, işletim sistemini, yeniden üretme adımlarını, beklenen etkiyi ve en az kanıtı ekle.',
      avoidTitle: 'Nelerden kaçınmalı',
      avoid: [
        'Düzeltmeden önce kullanılabilir ayrıntıları yayımlama.',
        'Üçüncü taraf verilerine erişme.',
        'Kalıcılık, veri sızdırma veya yıkıcı eylemler deneme.'
      ],
      githubTitle: 'GitHub',
      githubText: 'Uygun olduğunda depo güvenlik alanını da kullan:',
      githubLinkLabel: 'Güvenlik bildirimleri'
    },
    termsPrivacy: {
      metaTitle: 'Koşullar ve gizlilik',
      metaDescription: 'KPassword sitesi için temel koşullar ve gizlilik.',
      label: 'Koşullar ve gizlilik',
      title: 'Site kullanımı ve gizlilik',
      description: 'Resmi KPassword sitesi için kısa bir özet.',
      sections: [
        { title: 'Site gizliliği', text: 'Bu site statiktir. Varsayılan olarak çalışmak için hesap, giriş veya kişisel veri gönderimi gerektirmez.' },
        { title: 'İndirmeler', text: 'İndirme düğmesi GitHub yayınlarında barındırılan dosyalara yönlendirebilir. Bu durumda gezinme ve indirme, dosyayı barındıran platformun kurallarına da bağlıdır.' },
        { title: 'Yazılım kullanımı', text: 'KPassword yerel bir araç olarak sunulur. Ana parola, işletim sistemi, yedekler ve kurtarma kopyaları konusunda dikkatli olmak kullanıcının sorumluluğundadır.' },
        { title: 'Sınırlama', text: 'Proje iyi güvenlik uygulamalarını hedefler, ancak tüm olası senaryolara karşı mutlak koruma vadetmez.' }
      ]
    },
    notFound: {
      metaTitle: 'Sayfa bulunamadı',
      label: '404',
      title: 'Bu kasa kapısı yok.',
      text: 'Adres değişmiş olabilir ya da fazladan bir vida ile yazılmış olabilir.',
      button: 'Başlangıca dön'
    }
  }
} as const;
