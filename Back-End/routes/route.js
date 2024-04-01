const controller = require('../controllers/controllers')
const express = require("express");
const route = express()

route.get('/', controller.defualtRoute)
route.get('/login', controller.login)
route.post('/register', controller.register)

module.exports = route