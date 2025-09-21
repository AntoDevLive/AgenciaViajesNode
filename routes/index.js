import express from "express";

const router = express.Router();

//req: lo que se envia al server / res: lo que el server (express) nos devuelve
router.get('/', (req, res) => { 
    res.render('inicio')
})

router.get('/nosotros', (req, res) => {
    res.render('nosotros');
})

router.get('/contacto', (req, res) => {
    res.render('contacto')
})

export default router;