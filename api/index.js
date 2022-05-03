const express = require('express')
// const bodyParser = require('body-parser');
const routes = require('./routes')

// esse app esta sendo referenciado no arquivo index na pasta routes
const app = express ()

// app.use(bodyParser.json())



const port = 3000
routes(app)

// rota de teste
// app.get('/teste',  (req, res) => res
//     .status(200)
//     .send({mensagem: 'boas-vindas à API'}))

app.listen(port, () => console.log(`servidor esta ouvindo na porta ${port}`))


    // Exportando app para ficar disponivel para o restante da aplicação
module.exports = app