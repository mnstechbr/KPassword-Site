# Site oficial do KPassword

Site estático em Astro para divulgar o KPassword, explicar o modelo de segurança e disponibilizar o instalador do Windows.

## Stack escolhida

- Astro para páginas estáticas, SEO e HTML leve.
- CSS próprio em `src/styles/global.css` para reduzir dependências e facilitar manutenção.
- Conteúdo centralizado em `src/data/site.ts`.

## Como rodar no VS Code

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:4321`.

## Como gerar os arquivos finais

```bash
npm run build
```

Os arquivos prontos ficam em `dist/`.

## Onde alterar as informações principais

Edite `src/data/site.ts` para mudar:

- versão atual
- nome do arquivo do instalador
- link de download
- e-mail de segurança
- URL do repositório ou releases
- SHA-256 do instalador, quando você publicar o arquivo final

## Como colocar o instalador

1. Coloque o instalador em:

```text
public/downloads/KPassword-Setup-v0.9.3.exe
```

2. Gere o hash no Windows:

```powershell
Get-FileHash .\KPassword-Setup-v0.9.3.exe -Algorithm SHA256
```

3. Copie o SHA-256 para `src/data/site.ts` no campo `installerSha256`.

4. Rode:

```bash
npm run build
```

## Arquivo security.txt

Existe um arquivo modelo em `public/.well-known/security.txt`. Troque `security@seudominio.com` e `https://kpassword.app` pelos dados oficiais antes de publicar.

## Páginas incluídas

- Home
- Download
- Segurança
- Documentação
- Changelog
- Política de segurança
- Termos e Privacidade

## Observação jurídica

Os textos de Termos e Privacidade são uma base inicial para um app local/offline. Revise com orientação jurídica antes de publicar oficialmente, especialmente se você adicionar telemetria, conta, sincronização, pagamentos ou coleta de dados no futuro.
