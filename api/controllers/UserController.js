const db = require('../models')

class UserController {


   // Lista todos os usuarios
   // Static garante que o metodo seja chamado sem que seja necessário criar uma nova instância da classe
   // Async faz com que o metodo aguarde outro metodos internos serem resolvidos para depois devolver a resposta

   static async getAllUsers(req, res) {
       try { // por ser necessário o acesso externo o try/catch garante o tratamento de possivel erro
        //    Vai em db procura a classe Users retornada em models
        //     findaAlla é um metodo javascript responsável pelas query no banco 
           const listAllUsers = await db.Users.findAll();

        //    A resposta trará o status 200, convertidas para o formato json
           return res.status(200).json(listAllUsers);
           
        } catch (error) {
            return res.status(500).json(error.message)
        }
        
    }
    
    // Lista usuario por id
    static async getUserById(req, res) {

        // Aqui informo que a requisição terá um parametro com o nome id
        const { id } = req.params
        try {
            const oneUser = await db.Users.findOne({
                // acrescentado a clausula where do sql para filtrar a pesquisa
                where: {
                    // id: ->  da coluna
                    // (id) -> constante declarada acima que recebe o parametro
                    id: Number(id)
                }
            })
            return res.status(200).json(oneUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
  }
  
  module.exports = UserController