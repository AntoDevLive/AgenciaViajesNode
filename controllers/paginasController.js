import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

//Inicio
const paginaInicio = async (req, res) => {
    //Consultar 3 viajes del modelo Viaje y 3 del modelo Testimonial

    //Ambas consultas deben hacerse al mismo tiempo por lo que await hará que la siguiente línea no se ejecute hasta que esté lista la anterior

    //Solución: hacer que ambas se ejecuten a la vez incluyendolas en un array
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(Testimonial.findAll({ limit: 3 }))

    try {
        //ejecuta las dos promesas en paralelo y las muestra en el orden especificado anteriormente
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1],
        })
    } catch (error) {
        console.log(error)
    }
};

//Nosotros
const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
};

//Viajes
const paginaViajes = async (req, res) => {
    //Consultar BD
    const viajes = await Viaje.findAll()

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    })
};

//Testimoniales
const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }
};


//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { viaje } = req.params

    try {
        const resultado = await Viaje.findOne({ where: { slug: viaje } });
        res.render('viaje', {
            pagina: 'Información Viaje',
            resultado
        })
    } catch (error) {
        consolr.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}