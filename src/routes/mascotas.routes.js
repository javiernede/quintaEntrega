const express = require('express')
const routerMascotas = express.Router()
const multer = require('multer')

const DB_MASCOTAS = []

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/upload')
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()} - ${file.originalname }`)
    }

});

const upload = multer({ storage: storage });

routerMascotas.use((req, res, next) => {
    console.log(`Middleware de ruta de mascota ${Date.now()}`)
    next()
})

function MiddlewareGet(req, res, next) {

    console.log(`Middleware de ruta ${req.method} /api/mascotas ${req.url}`);

    next()
}


function MiddlewareGet2(req, res, next) {

    console.log(`Middleware de ruta ${req.method} /api/mascotas ${req.url}`);

    next()
}
routerMascotas.get('/', MiddlewareGet, MiddlewareGet2, (req, res) => {

    res.status(200).json(DB_MASCOTAS)

})

routerMascotas.get('/darpatita', (req, res) => {

    res.status(200).json({ msg: 'Te da la patita!' })
})

routerMascotas.post('/', upload.single('miArchivo'), (req, res, next) => {

    if (req.file) {

        const err = new Error('Favor agregar archivo')
        return next(err);
    } else {
        console.log(req.body);
        DB_MASCOTAS.push(req.body)
        res.status(201).json({ msg: 'Agendado', data: req.body })
    }
})

module.exports = routerMascotas;

/*
console.log(req.body);

    DB_MASCOTAS.push(req.body);

    res.status(201).json({ msg: 'Agregado!', data: req.body });*/