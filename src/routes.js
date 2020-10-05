const express = require('express')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')

const routes = express.Router()

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.get('/users/:user_id/addresses', AddressController.index)
routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/techs', AddressController.index)
routes.post('/users/:user_id/techs', AddressController.store)

module.exports = routes