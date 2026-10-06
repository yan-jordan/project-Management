const userController =  require('../controllers/user.controllers.js')
const auth = require('../middlewares/auth.js')

async function userRoutes(fastify , options){
    fastify.get('/' , userController.getAllUsers);
    fastify.get('/:id' , userController.getUserById);
    fastify.post('/' ,  { preHandler: auth} , userController.createUser);
    fastify.put('/:id' , userController.updateUser);
    fastify.delete('/:id' , userController.deleteUser)
}

module.exports = userRoutes;