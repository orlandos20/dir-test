const express = require("express");
const quotation = require("./quotation");

const app = express();

app.get('/', (req, res, next)=>{
    res.send("Hola Mundo!");
    next();
});

app.get('/cotizacion', (req, res, next) =>{
    res.send("Estas en /cotizacion");
    next();
});

app.use('/cotizacion/dolar', (req, res, next)=>{
    console.log("req", req);
    res.send(quotation);
});


app.listen(5000, ()=> console.log("App corriendo en puerto 5000!"));