// Esse Router é uma ferramenta do Express teremos acesso aos metodos dele
const { Router } = require('express');

// Responsavel pot gerenciar todas as rotas de Users
const UserController = require('../controllers/UserController.js');


// Iniciando o conjunto de métodos do Express
const router = Router();


// definindo a rota para listar todos usuarios
router.get('/users', UserController.getAllUsers)

// definindo a rota para listar usuario por id
router.get('/user/:id', UserController.getUserById)

module.exports = router ;