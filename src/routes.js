const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({msg: "olá mundo"})
})

module.exports = routes