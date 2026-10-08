const userController =  require('../controllers/user.controllers.js');
const basicAuth = require('../middlewares/auth/different-types-authentication/basic.auth.js')
const jwtToken = require('../middlewares/auth/different-types-authentication/jwt.generate.token.js');
const apiKeyAuth = require('../middlewares/auth/different-types-authentication/x.api.key.auth.js');

async function userRoutes(fastify , options){
    fastify.get('/' , { onRequest : fastify.jwtAuth } , userController.getAllUsers);
    fastify.get('/:id' , { preHandler: apiKeyAuth} , userController.getUserById);
    fastify.post('/' ,  { preHandler: basicAuth } , userController.createUser);
    fastify.put('/:id' , userController.updateUser);
    fastify.delete('/:id' , userController.deleteUser);
    fastify.post('/login' , jwtToken)
}

module.exports = userRoutes;
