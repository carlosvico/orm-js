const express = require('express')
const bodyParser = require('body-parser')

const app = express ()

//  Fará o meio de campo entre as requisições e o express
app.use(bodyParser.json())

const port = 3000

// rota de teste
app.get('/teste',  (req, res) => res
    .status(200)
    .send({mensagem: 'boas-vindas à API'}))

    app.listen(port, () => console.log(`servidor esta ouvindo na porta ${port}`))


    // Exportando app para ficar disponivel para o restante da aplicação
    module.exports = app