# orm-java script

## Pontos estudados nesse projeto

- Sequelize;
- Congiguração de hambiente ;
- Subir o servidor MySQL local
- Express
- Nodemon;
- Acesso ao banco via terminal deo MySQL
- Configuração de acesso ao Banco

## Preparando o hambiente:

> 1 - para subir o servidor local e gerenciar as rotas
  - npm init -y

> 2 - coverter os dados que chegam no post para o tipo de dados json
  -  npm install body-parser


> 3 - centraliza o ponto de entrada da aplicação em um arquivo index.js criado em uma nova pasta chamada api.
  - alterar no package.json o path --> ` main": "index.js` para `./api/index.js`


>4 - para a aplicação identificar alteraçõe no codigo e carrega-las automaticamente
> npm install --save-dev nodemon
- incluir no package.json o script -->  `"start": "nodemon ./api/index.js"`
  - subir o servidor com o comando  `npm run start`
 
> 5 - instalar o banco 
  - npm install mysql2
  
> 6 - instalar o sequelize e sequelize-cli
  - npm install sequelize sequelize-cli path


## Descrição dos procedimentos

> 1 - Criar um boilerplate padrão atraves do sequelize
-  o npx rodas as dependencias instaladas localmente 
-  npx sequelize-cli init
  
> 2 - Mante a organizaçção do projeto
- tranferir as pastas criadas pelo `cli` para a pasta api.

> 3 - criar na raiz do projeto arquivo .sequelizerc
  - definir os novos paths das pastas transferidas para a pasta api




