# Site — Dra. Kristina Guimarães · Implantodontia e Harmonização Orofacial

Site institucional de página única (Vite + React, JavaScript). Consultório em
Mogi das Cruzes - SP, com duas linhas de atendimento: implantes dentários e
harmonização orofacial.

## Rodando o projeto

```bash
npm install
npm run dev
```

Build de produção em `dist/`:

```bash
npm run build
npm run preview
```

## Onde editar o conteúdo

Todo o texto, contato, tratamento, etapa, dúvida e horário está em
[`src/data/content.js`](src/data/content.js). Nenhum componente precisa ser
aberto para trocar informação — inclusive os títulos das seções.

Estrutura:

| Pasta | O que tem |
| --- | --- |
| `src/styles/tokens.css` | Cores, tipografia, espaçamento, movimento |
| `src/styles/global.css` | Estilos de todas as seções |
| `src/data/content.js` | Todo o conteúdo textual |
| `src/components/` | Uma seção por arquivo |
| `src/assets/icons/` | Ícones SVG e o traço-assinatura |

## Imagens: o que pode e o que não pode

O Código de Ética Odontológica veda imagens de **"antes e depois"** na
divulgação. Por isso o site trata os sinais do envelhecimento facial com uma
**ilustração esquemática autoral** (`src/components/AgingSigns.jsx`), sem foto
de paciente. Depoimentos com nome abreviado são permitidos; fotos clínicas de
pacientes, não. Material de outros profissionais (com marca d'água ou não)
também não entra.

## Pendências antes de publicar

Os placeholders estão marcados no código com `// TODO: substituir pelo dado real`.

- **Contato** (`src/data/content.js`): telefone, WhatsApp, Instagram e e-mail
- **Endereço** (`src/data/content.js`): confirmar. O endereço atual foi informado
  quando o projeto tinha outro titular
- **Especialidades** (`src/data/content.js`): confirmar Implantodontia e
  Harmonização Orofacial e seus registros
- **CRO e registro de especialidade** (`src/data/content.js`): exibidos no hero,
  na seção Sobre e no rodapé. A exibição do CRO é exigência legal; o número do
  registro da especialidade é exigido sempre que a palavra "especialista"
  aparecer na divulgação
- **Galeria**: as 6 fotos do consultório continuam como placeholders
- **Depoimentos**: os 4 textos são ilustrativos, com nome fictício. Trocar por
  depoimentos autorizados
- **`index.html`**: domínio definitivo (canonical e `og:url`), imagem de
  compartilhamento 1200×630, e telefone/e-mail repetidos no JSON-LD
- **Galeria e depoimentos**: trocar por material real e autorizado

## Critérios que a copy precisa manter

O Código de Ética Odontológica proíbe superlativos, comparações com outros
profissionais, anúncio de preço como promoção e promessa de resultado. Os textos
falam em qualificação, planejamento e acompanhamento — nunca em garantia. Ao
editar `content.js`, mantenha esse critério.

## Acessibilidade

Contraste mínimo de 4,5:1 em todo texto, alvos de toque de 44px, HTML semântico
com um único `<h1>`, foco de teclado sempre visível e todas as animações com
versão reduzida sob `prefers-reduced-motion`.
