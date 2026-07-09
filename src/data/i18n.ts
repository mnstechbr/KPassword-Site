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
  'verifyDownload',
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
    verifyDownload: '/verificar-download',
    securityPolicy: '/politica-de-seguranca',
    termsPrivacy: '/termos-e-privacidade'
  },
  es: {
    home: '/es/',
    download: '/es/descargar',
    security: '/es/seguridad',
    changelog: '/es/novedades',
    docs: '/es/documentacion',
    verifyDownload: '/es/verificar-download',
    securityPolicy: '/es/politica-de-seguridad',
    termsPrivacy: '/es/terminos-y-privacidad'
  },
  en: {
    home: '/en/',
    download: '/en/download',
    security: '/en/security',
    changelog: '/en/changelog',
    docs: '/en/docs',
    verifyDownload: '/en/verify-download',
    securityPolicy: '/en/security-policy',
    termsPrivacy: '/en/terms-privacy'
  },
  tr: {
    home: '/tr/',
    download: '/tr/indir',
    security: '/tr/guvenlik',
    changelog: '/tr/degisiklikler',
    docs: '/tr/belgeler',
    verifyDownload: '/tr/indirmeyi-dogrula',
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
      verifyDownload: 'Verificar download',
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
      metaDescription: 'KPassword é um aplicativo para guardar e organizar senhas com segurança no Windows, em um cofre local criptografado e sem nuvem obrigatória.',
      label: 'Gerenciador de senhas local para Windows',
      title: 'KPassword: suas senhas organizadas e protegidas no seu Windows',
      lead: 'Guarde suas senhas em um cofre no seu computador, sem depender de nuvem obrigatória.',
      text: 'Organize logins, copie quando precisar e receba alertas sobre senhas fracas ou repetidas.',
      primary: 'Baixar para Windows',
      secondary: 'Ver novidades',
      fineprintConfigured: 'O botão usa o instalador mais recente publicado pelo projeto.',
      fineprintPending: 'O download será ativado quando o repositório do app estiver configurado.',
      previewAria: 'Demonstração visual do Cofre do KPassword',
      previewAlt: 'Tela do Cofre do KPassword com credenciais fictícias organizadas em uma lista',
      previewCaption: 'Exemplo do Cofre do KPassword com dados fictícios.',
      sectionLabel: 'Por que usar',
      sectionTitle: 'O essencial para cuidar melhor dos seus acessos.',
      cards: [
        { title: 'Senhas organizadas', text: 'Guarde logins, sites e observações em um lugar feito para credenciais.' },
        { title: 'Cofre local protegido', text: 'Seus dados ficam no Windows, sem exigir conta online ou nuvem obrigatória.' },
        { title: 'Alertas de segurança', text: 'Avisos ajudam você a encontrar senhas fracas, repetidas ou antigas.' }
      ],
      workflowLabel: 'Como funciona',
      workflowTitle: 'Três passos para usar no dia a dia.',
      workflowSteps: [
        { number: '1', title: 'Crie seu cofre', text: 'Defina sua senha mestra e mantenha o cofre no computador.' },
        { number: '2', title: 'Salve suas credenciais', text: 'Cadastre usuário, senha, site e notas quando precisar.' },
        { number: '3', title: 'Copie quando precisar', text: 'Use usuário e senha rapidamente para entrar nos serviços.' }
      ],
      stripText: 'Feito para Windows, com cofre local e sem nuvem obrigatória.'
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
      verifyDownload: 'Verificar download',
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
      docsButton: 'Abrir documentação',
      verifyDownloadButton: 'Verificar download'
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
    verifyDownload: {
      metaTitle: 'Verificar download',
      metaDescription: 'Como conferir o instalador do KPassword antes de instalar no Windows.',
      label: 'Verificar download',
      title: 'Confira o instalador antes de abrir',
      description: 'A verificação reduz o risco de instalar um arquivo errado, adulterado ou baixado de uma origem incorreta. É um cuidado simples, sem prometer proteção absoluta.',
      sourceTitle: 'Comece pela origem',
      sourceText: 'Baixe sempre pelo site oficial ou pela página GitHub Releases do repositório mnstechbr/KPassword.',
      latestTitle: 'Último lançamento público',
      version: 'Versão',
      installer: 'Instalador',
      release: 'Lançamento',
      latestJson: 'latest.json',
      signature: 'Assinatura .sig',
      openRelease: 'Abrir lançamento',
      openFile: 'Abrir arquivo',
      notAvailable: 'Não encontrado neste lançamento',
      repository: 'Repositório',
      hashTitle: 'Conferir SHA256 no PowerShell',
      hashText: 'Depois de baixar, abra o PowerShell na pasta do arquivo e rode:',
      hashHelp: 'Compare o valor exibido com o SHA256 publicado no lançamento oficial, quando houver. Se o GitHub mostrar um resumo SHA256 para o arquivo, ele deve bater com esse resultado.',
      updaterTitle: 'Arquivos do atualizador',
      updaterText: 'Os arquivos .sig e latest.json fazem parte do atualizador assinado. Eles ajudam o app a validar atualizações, mas não substituem o cuidado de baixar pela origem correta.',
      stepsTitle: 'Checklist rápido',
      steps: [
        { title: '1. Origem', text: 'Confirme que o lançamento pertence ao repositório mnstechbr/KPassword.' },
        { title: '2. Nome', text: 'Confira se o arquivo parece um instalador do KPassword, por exemplo KPassword-Setup-v0.9.5.exe.' },
        { title: '3. Hash', text: 'Use o PowerShell para calcular o SHA256 do arquivo baixado.' },
        { title: '4. Dúvida', text: 'Se nome, hash ou origem não baterem, não instale. Apague o arquivo e baixe novamente pelo site oficial ou pelo GitHub Releases.' }
      ],
      warningTitle: 'Evite fontes desconhecidas',
      warningText: 'Não instale arquivos recebidos por mensagens, fóruns, encurtadores ou sites de terceiros. Se algo parecer diferente do release oficial, prefira parar e conferir antes.'
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
      verifyDownload: 'Verificar descarga',
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
      metaDescription: 'KPassword es una app para guardar y organizar contraseñas con seguridad en Windows, en una caja fuerte local cifrada y sin nube obligatoria.',
      label: 'Gestor de contraseñas local para Windows',
      title: 'KPassword: tus contraseñas organizadas y protegidas en Windows',
      lead: 'Guarda tus contraseñas en una caja fuerte en tu computadora, sin depender de una nube obligatoria.',
      text: 'Organiza logins, copia cuando lo necesites y recibe alertas sobre contraseñas débiles o repetidas.',
      primary: 'Descargar para Windows',
      secondary: 'Ver novedades',
      fineprintConfigured: 'El botón usa el instalador más reciente publicado por el proyecto.',
      fineprintPending: 'La descarga se activará cuando el repositorio de la app esté configurado.',
      previewAria: 'Demostración visual de la caja fuerte de KPassword',
      previewAlt: 'Pantalla de la caja fuerte de KPassword con credenciales ficticias organizadas en una lista',
      previewCaption: 'Ejemplo de la caja fuerte de KPassword con datos ficticios.',
      sectionLabel: 'Por qué usarlo',
      sectionTitle: 'Lo esencial para cuidar mejor tus accesos.',
      cards: [
        { title: 'Contraseñas organizadas', text: 'Guarda logins, sitios y notas en un lugar pensado para credenciales.' },
        { title: 'Caja fuerte local', text: 'Tus datos quedan en Windows, sin exigir cuenta en línea ni nube obligatoria.' },
        { title: 'Alertas de seguridad', text: 'Los avisos ayudan a encontrar contraseñas débiles, repetidas o antiguas.' }
      ],
      workflowLabel: 'Cómo funciona',
      workflowTitle: 'Tres pasos para el uso diario.',
      workflowSteps: [
        { number: '1', title: 'Crea tu caja fuerte', text: 'Define tu contraseña maestra y mantén la caja fuerte en tu computadora.' },
        { number: '2', title: 'Guarda credenciales', text: 'Registra usuario, contraseña, sitio y notas cuando lo necesites.' },
        { number: '3', title: 'Copia cuando haga falta', text: 'Usa usuario y contraseña rápidamente para entrar en tus servicios.' }
      ],
      stripText: 'Hecho para Windows, con caja fuerte local y sin nube obligatoria.'
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
      verifyDownload: 'Verificar descarga',
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
      docsButton: 'Abrir documentación',
      verifyDownloadButton: 'Verificar descarga'
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
    verifyDownload: {
      metaTitle: 'Verificar descarga',
      metaDescription: 'Cómo revisar el instalador de KPassword antes de instalarlo en Windows.',
      label: 'Verificar descarga',
      title: 'Revisa el instalador antes de abrirlo',
      description: 'La verificación reduce el riesgo de instalar un archivo equivocado, alterado o descargado desde un origen incorrecto. Es una precaución simple, sin prometer protección absoluta.',
      sourceTitle: 'Empieza por el origen',
      sourceText: 'Descarga siempre desde el sitio oficial o desde la página GitHub Releases del repositorio mnstechbr/KPassword.',
      latestTitle: 'Última publicación pública',
      version: 'Versión',
      installer: 'Instalador',
      release: 'Publicación',
      latestJson: 'latest.json',
      signature: 'Firma .sig',
      openRelease: 'Abrir publicación',
      openFile: 'Abrir archivo',
      notAvailable: 'No encontrado en esta publicación',
      repository: 'Repositorio',
      hashTitle: 'Verificar SHA256 en PowerShell',
      hashText: 'Después de descargar, abre PowerShell en la carpeta del archivo y ejecuta:',
      hashHelp: 'Compara el valor mostrado con el SHA256 publicado en la publicación oficial, cuando exista. Si GitHub muestra un resumen SHA256 para el archivo, debe coincidir con ese resultado.',
      updaterTitle: 'Archivos del actualizador',
      updaterText: 'Los archivos .sig y latest.json forman parte del actualizador firmado. Ayudan a la app a validar actualizaciones, pero no reemplazan la precaución de descargar desde el origen correcto.',
      stepsTitle: 'Checklist rápido',
      steps: [
        { title: '1. Origen', text: 'Confirma que la publicación pertenece al repositorio mnstechbr/KPassword.' },
        { title: '2. Nombre', text: 'Revisa que el archivo parezca un instalador de KPassword, por ejemplo KPassword-Setup-v0.9.5.exe.' },
        { title: '3. Hash', text: 'Usa PowerShell para calcular el SHA256 del archivo descargado.' },
        { title: '4. Duda', text: 'Si el nombre, el hash o el origen no coinciden, no instales. Borra el archivo y descarga de nuevo desde el sitio oficial o GitHub Releases.' }
      ],
      warningTitle: 'Evita fuentes desconocidas',
      warningText: 'No instales archivos recibidos por mensajes, foros, enlaces acortados o sitios de terceros. Si algo se ve distinto de la publicación oficial, es mejor detenerse y revisar antes.'
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
      verifyDownload: 'Verify download',
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
      metaDescription: 'KPassword is an app for storing and organizing passwords safely on Windows, in an encrypted local vault with no mandatory cloud.',
      label: 'Local password manager for Windows',
      title: 'KPassword: organized and protected passwords on your Windows PC',
      lead: 'Store your passwords in a vault on your computer, without depending on a mandatory cloud.',
      text: 'Organize logins, copy them when needed and get alerts about weak or repeated passwords.',
      primary: 'Download for Windows',
      secondary: 'See updates',
      fineprintConfigured: 'The button uses the latest installer published by the project.',
      fineprintPending: 'The download will be enabled when the app repository is configured.',
      previewAria: 'Visual demo of the KPassword vault',
      previewAlt: 'KPassword vault screen with fictional credentials organized in a list',
      previewCaption: 'Example of the KPassword vault with fictional data.',
      sectionLabel: 'Why use it',
      sectionTitle: 'The essentials for taking better care of your access.',
      cards: [
        { title: 'Organized passwords', text: 'Store logins, websites and notes in a place built for credentials.' },
        { title: 'Local protected vault', text: 'Your data stays on Windows, without requiring an online account or mandatory cloud.' },
        { title: 'Security alerts', text: 'Warnings help you spot weak, repeated or old passwords.' }
      ],
      workflowLabel: 'How it works',
      workflowTitle: 'Three steps for everyday use.',
      workflowSteps: [
        { number: '1', title: 'Create your vault', text: 'Set your master password and keep the vault on your computer.' },
        { number: '2', title: 'Save credentials', text: 'Add username, password, website and notes when needed.' },
        { number: '3', title: 'Copy when needed', text: 'Use usernames and passwords quickly when signing in to services.' }
      ],
      stripText: 'Built for Windows, with a local vault and no mandatory cloud.'
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
      verifyDownload: 'Verify download',
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
      docsButton: 'Open documentation',
      verifyDownloadButton: 'Verify download'
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
    verifyDownload: {
      metaTitle: 'Verify download',
      metaDescription: 'How to check the KPassword installer before installing it on Windows.',
      label: 'Verify download',
      title: 'Check the installer before opening it',
      description: 'Verification reduces the risk of installing the wrong file, a tampered file, or a file downloaded from the wrong source. It is a simple precaution, without promising absolute protection.',
      sourceTitle: 'Start with the source',
      sourceText: 'Always download from the official site or from the GitHub Releases page of the mnstechbr/KPassword repository.',
      latestTitle: 'Latest public release',
      version: 'Version',
      installer: 'Installer',
      release: 'Release',
      latestJson: 'latest.json',
      signature: '.sig signature',
      openRelease: 'Open release',
      openFile: 'Open file',
      notAvailable: 'Not found in this release',
      repository: 'Repository',
      hashTitle: 'Check SHA256 in PowerShell',
      hashText: 'After downloading, open PowerShell in the file folder and run:',
      hashHelp: 'Compare the displayed value with the SHA256 published in the official release, when available. If GitHub shows a SHA256 digest for the asset, it should match this result.',
      updaterTitle: 'Updater files',
      updaterText: 'The .sig and latest.json files are used by the signed updater. They help the app validate updates, but they do not replace downloading from the correct source.',
      stepsTitle: 'Quick checklist',
      steps: [
        { title: '1. Source', text: 'Confirm that the release belongs to the mnstechbr/KPassword repository.' },
        { title: '2. Name', text: 'Check that the file looks like a KPassword installer, for example KPassword-Setup-v0.9.5.exe.' },
        { title: '3. Hash', text: 'Use PowerShell to calculate the SHA256 of the downloaded file.' },
        { title: '4. Doubt', text: 'If the name, hash, or source does not match, do not install it. Delete the file and download again from the official site or GitHub Releases.' }
      ],
      warningTitle: 'Avoid unknown sources',
      warningText: 'Do not install files received through messages, forums, short links, or third-party sites. If something looks different from the official release, stop and check first.'
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
      verifyDownload: 'İndirmeyi doğrula',
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
      metaDescription: 'KPassword, parolaları Windows üzerinde güvenle saklamak ve düzenlemek için kullanılan, zorunlu bulut gerektirmeyen şifreli yerel kasalı bir uygulamadır.',
      label: 'Windows için yerel parola yöneticisi',
      title: 'KPassword: parolaların Windows bilgisayarında düzenli ve korumalı kalsın',
      lead: 'Parolalarını bilgisayarındaki bir kasada sakla; zorunlu buluta bağlı kalma.',
      text: 'Girişleri düzenle, gerektiğinde kopyala ve zayıf ya da tekrarlanan parolalar için uyarılar al.',
      primary: 'Windows için indir',
      secondary: 'Yenilikleri gör',
      fineprintConfigured: 'Düğme, proje tarafından yayımlanan en yeni kurulum dosyasını kullanır.',
      fineprintPending: 'Uygulama deposu yapılandırıldığında indirme etkinleşir.',
      previewAria: 'KPassword kasasının görsel demosu',
      previewAlt: 'KPassword kasasında liste halinde düzenlenmiş kurgusal kimlik bilgileri ekranı',
      previewCaption: 'Kurgusal verilerle KPassword Kasası örneği.',
      sectionLabel: 'Neden kullanmalı',
      sectionTitle: 'Erişimlerini daha iyi korumak için temel olanlar.',
      cards: [
        { title: 'Düzenli parolalar', text: 'Girişleri, siteleri ve notları kimlik bilgileri için yapılmış bir yerde sakla.' },
        { title: 'Yerel korumalı kasa', text: 'Verilerin Windows üzerinde kalır; çevrim içi hesap veya zorunlu bulut gerekmez.' },
        { title: 'Güvenlik uyarıları', text: 'Uyarılar zayıf, tekrarlanan veya eski parolaları görmene yardımcı olur.' }
      ],
      workflowLabel: 'Nasıl çalışır',
      workflowTitle: 'Günlük kullanım için üç adım.',
      workflowSteps: [
        { number: '1', title: 'Kasanı oluştur', text: 'Ana parolanı belirle ve kasayı bilgisayarında tut.' },
        { number: '2', title: 'Bilgileri kaydet', text: 'Gerektiğinde kullanıcı adı, parola, site ve not ekle.' },
        { number: '3', title: 'Gerektiğinde kopyala', text: 'Hizmetlere girerken kullanıcı adı ve parolayı hızlıca kullan.' }
      ],
      stripText: 'Windows için yapıldı; yerel kasa kullanır ve zorunlu bulut istemez.'
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
      verifyDownload: 'İndirmeyi doğrula',
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
      docsButton: 'Belgeleri aç',
      verifyDownloadButton: 'İndirmeyi doğrula'
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
    verifyDownload: {
      metaTitle: 'İndirmeyi doğrula',
      metaDescription: 'Windows’a kurmadan önce KPassword kurulum dosyasını nasıl kontrol edeceğin.',
      label: 'İndirmeyi doğrula',
      title: 'Açmadan önce kurulum dosyasını kontrol et',
      description: 'Doğrulama; yanlış, değiştirilmiş veya yanlış kaynaktan indirilmiş bir dosyayı kurma riskini azaltır. Mutlak koruma vadetmeden, basit bir önlemdir.',
      sourceTitle: 'Kaynakla başla',
      sourceText: 'Her zaman resmi siteden veya mnstechbr/KPassword deposunun GitHub Releases sayfasından indir.',
      latestTitle: 'Son herkese açık yayın',
      version: 'Sürüm',
      installer: 'Kurulum dosyası',
      release: 'Yayın',
      latestJson: 'latest.json',
      signature: '.sig imzası',
      openRelease: 'Yayını aç',
      openFile: 'Dosyayı aç',
      notAvailable: 'Bu yayında bulunamadı',
      repository: 'Depo',
      hashTitle: 'PowerShell ile SHA256 kontrolü',
      hashText: 'İndirdikten sonra dosyanın bulunduğu klasörde PowerShell aç ve şunu çalıştır:',
      hashHelp: 'Gösterilen değeri, varsa resmi yayında yayımlanan SHA256 ile karşılaştır. GitHub dosya için SHA256 özeti gösteriyorsa, bu sonuçla aynı olmalıdır.',
      updaterTitle: 'Güncelleyici dosyaları',
      updaterText: '.sig ve latest.json dosyaları imzalı güncelleyici tarafından kullanılır. Uygulamanın güncellemeleri doğrulamasına yardım ederler, ancak doğru kaynaktan indirme dikkatinin yerini almazlar.',
      stepsTitle: 'Hızlı kontrol listesi',
      steps: [
        { title: '1. Kaynak', text: 'Yayının mnstechbr/KPassword deposuna ait olduğunu doğrula.' },
        { title: '2. Ad', text: 'Dosyanın KPassword kurulum dosyasına benzediğini kontrol et, örneğin KPassword-Setup-v0.9.5.exe.' },
        { title: '3. Hash', text: 'İndirilen dosyanın SHA256 değerini hesaplamak için PowerShell kullan.' },
        { title: '4. Şüphe', text: 'Ad, hash veya kaynak uyuşmuyorsa kurma. Dosyayı sil ve resmi siteden ya da GitHub Releases sayfasından yeniden indir.' }
      ],
      warningTitle: 'Bilinmeyen kaynaklardan kaçın',
      warningText: 'Mesajlar, forumlar, kısaltılmış bağlantılar veya üçüncü taraf sitelerden gelen dosyaları kurma. Bir şey resmi yayından farklı görünüyorsa, önce durup kontrol et.'
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
