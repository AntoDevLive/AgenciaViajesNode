import express from "express";
import router from "./routes/index.js";

const app = express();

//Definir puerto
const port = process.env.PORT || 4000

//Agregar router
app.use('/', router);

//Habilitar Pug
app.set('view engine', 'pug');


app.listen(port, () => {
    console.log('el servidor esta funcionando en el puerto: ' + port)
})