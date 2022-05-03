const bodyParser = require('body-parser')
const users = require('./usersRoute.js')

module.exports = app => {
    //  Fará o meio de campo entre as requisições e o express
app.use(bodyParser.json())
app.use(users)
// app.get('/', (req, res) => res.send('Olã'))
}