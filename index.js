import express from "express";

const app = express();

//Definir puerto
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.render('hola mundo')
})

app.listen(port, () => {
    console.log('el servidor esta funcionando en el puerto: ' + port)
})