const express = require('express')
const routerPersonas = express.Router()

const DB_PERSONAS = []

routerPersonas.get('/', (req, res) => {
    res.status(200).json(DB_PERSONAS)
})

routerPersonas.get('/darmano', (req, res) => {
    res.status(200).json({ msg: 'Te da la mano!' })
})

routerPersonas.post('/', (req, res) => {
    console.log(req.body);
    DB_PERSONAS.push(req.body);
    res.status(201).json({ msg: 'Agregado!', data: req.body });
})

module.exports = routerPersonas;