# Instalação NextJS

- npx create-next-app@latest

- Marcar sim em todas opções exceto na opção da utilização do Talwind, pois a lib de estilização padrão
  da wefit é o styled-components. Para UI no lado do cliente utilizaremos o styled-components
  e para UI no lado do server utilizaremos Sass SCSS.

# Configurar eslint

- Inicializando eslint no projeto nextJS `npx eslint --init`

- `How would you like to use ESLint?`: `To check sintax and find problems`
- `What type of modules does your project use?`: `JavaScript modules (import/export)`
- `Wich framework does your project use?`: `React`
- `Does your project use TypeScript`: `Yes`
- `Where does your code run? ...`: `* browser`
- `What format do you want your config file to be in? ...`: `JSON`
- `Would you like to install them now with npm?`: `Yes`

* Após a inicialização do eslint o arquivo `.eslintrc.json` terá essa configuração:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {}
}
```

- Instalar plugin react-hooks para auxiliar sobre as propriedades dos arrays de dependências do react:

```bash
npm i eslint-plugin-react-hooks --save-dev
```

- No arquivo `.eslintrc.json` será necessário adicionar novas propriedades para configurações essenciais
  do ESLINT, segue abaixo:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  // Objeto settings: serve para correção do warning do eslint que menciona que nenhuma versão do react foi especificada
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "react-hooks"], // item "react-hooks" para utilização do plugin react-hooks
  "rules": {
    "react-hooks/rules-of-hooks": "error", // utilização do plugin react-hooks
    "react-hooks/exhaustive-deps": "warn", // utilização do plugin react-hooks
    "react/react-in-jsx-scope": "off" // para desabilitar erro desnecessário sobre import React em todos arquivos TSX
  }
}
```

- Para checar se há algum arquivo TS ou TSX fora das regras do eslint basta rodar o comando

```bash
npx eslint src
```

# Configurar o Prettier:

- Instalar o Prettier:

```bash
npm install --save-dev --save-exact prettier
```

- Após a instalação do Prettier será necessário criar também o seu arquivo de configuração. Na
  raiz do projeto criar um arquivo com o nome `.prettierrc` e inserir as seguintes configurações:

```json
{
  "tabWidth": 2, // espaçamento de caracteres a cada tab do código
  "useTabs": false, // utilização de espaço em branco ao invés de tabulações para criar recuos no código
  "singleQuote": true, // utilização de aspas simples em trechos ts
  "trailingComma": "all", // inserção de virgula na ultima prop do objeto
  "arrowParens": "avoid", // Omite parênteses quando possível. Exemplo: x => x
  "printWidth": 100, // número mxm de caracter em uma linha antes de quebrar
  "semi": true // ponto e vírgula no final de cada instrução
}
```

# Integração do Prettier com o Eslint

- Instalar os plugin

```bash
npm install --save-dev eslint-config-prettier
```

```bash
npm install --save-dev eslint-plugin-prettier
```

- Adicionar as configs do Prettier no arquivo `eslintrc.json`:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off"
  }
}
```
- criar uma config vscode para que as configurações de outras máquinas do vscode não entrem em
conflito com as configurações de formatação de código do projeto em si. Na raiz do projeto
criar a seguinte estrutura `.vscode/settings.json`. Dentro desse novo arquivo criado, inserir as
seguintes configurações:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

# Organização de imports no código

- Instalar plugin import helpers:

```
npm i eslint-plugin-import-helpers --save-dev
```

- adicionar em `tsconfig.json` as propriedades paths e baseURL para a ordenação:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@types/*": ["src/presentation/@types/*"],
      "@components/*": ["src/presentation/components/*"],
      "@context/*": ["src/presentation/context/*"],
      "@hooks/*": ["src/presentation/hooks/*"],
      "@router/*": ["src/presentation/router/*"],
      "@utils/*": ["src/presentation/utils/*"],
      "@assets/*": ["src/presentation/assets/*"],
      "@constants/*": ["src/presentation/constants/*"],
      "@providers/*": ["src/presentation/providers/*"],
      "@styles/*": ["src/presentation/styles/*"],
      "@flows/*": ["src/presentation/flows/*"],
      //
      "@data/*": ["src/data/*"],
      "@domain/*": ["src/domain/*"],
      "@i18n/*": ["src/i18n/*"],
      "@infra/*": ["src/infra/*"],
      "@main/*": ["src/main/*"]
    },
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- e necessário atualizar também a config no arquivo `.eslintrc.json`:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "react-hooks", "eslint-plugin-import-helpers"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/display-name": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [ // ordem dos imports
          ["/^react$/", "/^next/", "/^@next/"], // 1º: imports do react e next
          ["/^@react/", "/^@azul/", "module"], // 2º: imports @react, lib-azul e outras libs node_modules
          ["/^@data/", "/^@domain/", "/^@infra/", "/^@main/", "/^@i18n/"], // 3º: imports fora de presentation
          [ // 4º imports dentro de presentation
            "/^@components/",
            "/^@context/",
            "/^@hooks/",
            "/^@router/",
            "/^@utils/",
            "/^@assets/",
            "/^@constants/",
            "/^@providers/",
            "/^@styles/",
            "/^@flows/"
          ],
          ["parent", "sibling", "index"] // 5º: imports dentro do mesmo diretório
        ],
        "alphabetize": {
          "order": "asc",
          "ignoreCase": true
        }
      }
    ]
  }
}
```

* Note que a ordenação no arquivo `.eslintrc.json` deve estar condizente com as props baseURL e paths
de `tsconfig.json` e que as estruturas e quantidades de diretórios podem variar de projeto para projeto.
Certifique com seu líder qual será a estrutura de pastas do projeto para ser configurada nessa etapa.

- Criar na raiz do projeto um arquivo com o nome `.editorconfig` com a seguinte configuração:

```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = false
```

- Por último criar mais dois arquivos na raiz do projeto `.eslintignore` e `.prettierignore`, para que
as regras de lint não sejam aplicadas em arquivos desnecessários. Nesses dois aquivos inserir a mesma
config:

```
# Ignore artifacts:
.next
.vscode
node_modules
public
build
dist
coverage
**/*.js
assets
```