# backoffice-pedido-front

Front-end do backoffice pedido da Ben

## Pré-requisitos

Você precisará ter instalado na sua máquina os seguintes programas:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Yarn](https://yarnpkg.com/)
- [Google Chrome](https://google.com/chrome/)

## Instalação

- `git clone <repository-url>` esse repositório
- `cd backoffice-pedido-front`
- `yarn install --ignore-engines`

## Running / Development

- `yarn start:local`
- Visite o app em [http://localhost:4010](http://localhost:4010).

### Building

```bash
# local
yarn build:local

# development
yarn build:development

# qa
yarn build:qa

# staging
yarn build:staging

# production
yarn build:production
```

> O resultado do build estará no diretório `./dist`

## Commits Guideline

Nós possuímos regras e padrões sobre como as nossas mensagens de commit devem ser formatadas. Isso nós oferece uma melhor experiência na hora de acompaharmos o history do projeto.

Utilizamos o padrão de [conventional commits](https://www.conventionalcommits.org/), logo todos os commits neste repositório deverão seguir essa convenção.

### Formato do Commit

Cada mensagem de commit pode conter um **header**, um **body** e um **footer**. O header possui um formato especial que pode conter um **type**, uma **task** (task ou história do jira) e um **subject**.

```
<type>(<task>): <subject>
<body>
<footer>
```

O **type** e o **subject** são obrigatórios.

Exemplo:

`docs: change README about CICD`

### Tipos de Commits

| Tipo    | Função                                                                      |
| ------- | --------------------------------------------------------------------------- |
| _feat_  | Uma nova implementação / feature                                            |
| _build_ | Modificações que afetam as ferramentas de build                             |
| _ci_    | Modificações nos arquivos e nos scripts de configuração de CI               |
| _docs_  | Modificações em documentações e afins                                       |
| _fix_   | Correção de um bug                                                          |
| _perf_  | Modificações de código para otimizar performance                            |
| _impr_  | Modificações que não necessariamente é um fix ou nova feature               |
| _style_ | Mudanças que não modifiquem lógica (white-space, formatting, prettier, etc) |
| _test_  | Testes que foram adicionados ou corrigidos                                  |
| _chore_ | Uma modificação geral que não se enquandra em nenhum outro padrão           |

## 1. Instalando Plugins do Editor

Para desenvolver esse projeto, você precisará instalar os seguintes plugins no seu editor.

> ⚠️ No momento todos utilizamos VSCode, caso você use algum editor diferente, inserir aqui o equivalente dos plugins abaixo

| Plugin                 | Obrigatório |
| ---------------------- | ----------- |
| Prettier               | \*          |
| GitLens                |             |
| VS Live Share          |             |
| Bracket Pair Colorizer |             |
