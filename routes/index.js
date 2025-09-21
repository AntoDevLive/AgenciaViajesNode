import express from "express";

const router = express.Router();

//req: lo que se envia al server / res: lo que el server (express) nos devuelve
router.get('/', (req, res) => { 
    res.render('inicio', {
        pagina: 'Inicio'
    })
})

router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
})

router.get('/viajes', (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
    })
})

router.get('/testimoniales', (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
})

export default router;