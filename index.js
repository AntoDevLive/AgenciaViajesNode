import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch(error => console.log(error))


//Definir puerto
const port = process.env.PORT || 4000

//Agregar router
app.use('/', router);

//Habilitar Pug
app.set('view engine', 'pug');

//Definir la carpeta publica
app.use(express.static('public'));


app.listen(port, () => {
    console.log('el servidor esta funcionando en el puerto: ' + port)
})