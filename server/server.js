const express = require("express");

const app = express();

app.get('/', (req, res, next)=>{
    res.send("Hola Mundo!");
    next();
});

app.get('/cotizacion', (req, res) =>{
    res.send("Estas en /cotizacion");
});


app.listen(5000, ()=> console.log("App corriendo en puerto 5000!"));