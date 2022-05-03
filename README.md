# Biblioteca node - Orm

## Pontos estudados nesse projeto

- Sequelize;
- Congiguração de hambiente ;
- Subir o servidor MySQL local
- Express
- Nodemon;
- Acesso ao banco via terminal deo MySQL
- Configuração de acesso ao Banco

# Preparando o hambiente:

  - npm init -y
  
>## 1 - Express 
- para subir o servidor local e gerenciar as rotas
  - npm intall express

>## 2 - Body-Parser 
- coverter os dados que chegam no post para o tipo de dados json
  - npm install body-parser


> ## 3 - /api 
-  centraliza o ponto de entrada da aplicação em um arquivo index.js criado em uma nova pasta chamada api.
   -   alterar no package.json o path --> ` main": "index.js` para `./api/index.js`


>## 4 - Nodemon 
-  para a aplicação identificar alteraçõe no codigo e carrega-las automaticamente
   - npm install --save-dev nodemon
   - incluir no package.json o script -->  `"start": "nodemon ./api/index.js"`
   - subir o servidor com o comando  `npm run start`
 
>## 5 - Mysql - instalar o banco 
  - npm install mysql2
 
  
>## 6 - Orm Sequelize , sequelize-cli e path
  - npm install sequelize sequelize-cli path


## Descrição dos procedimentos

> 1 - Criar um boilerplate padrão atraves do sequelize
-  o npx rodas as dependencias instaladas localmente 
-  npx sequelize-cli init
  
> 2 - Manter a organizaçção do projeto
- tranferir as pastas criadas pelo `cli` para a pasta api.

> 3 - criar na raiz do projeto arquivo .sequelizerc
  - definir os novos paths das pastas transferidas para a pasta api

>## Banco de dados
-  criar banco `company` para o desenvolvimento

>## 1 - Conectar a aplicação ao banco criado 
- no arquivo `./api/config/config.json`
  - definir o nome do banco, usuario e password

- npx sequelize-cli model:create --name Users --attributes name:string,nickname:string,email:string,phone:string,password:string;

>## 2 - Rodar a migrate
- npx sequelize-cli db:migrate


>## 3 - Conferir se a tabela foi criada no banco
- comandos:
  - use company;
  - describe users;
  - populando tabela manualmente
    - insert into users (name, nickname,email,phone,password, createdAt, updatedAt) values ("nome teste", "teste", "teste@teste.com", "945453777", "teste123", NOW(), NOW());

>## 4 - Populando tabela com seed:generate
- npx sequelize-cli seed:generate --name users-demo
  - após criar o arquivo seed e inserir os dados nele 
  - dar incluir no banco
  - > npx sequelize-cli db:seed:all

>## 5 - Controller - Ligando a model ao resto da aplicação


