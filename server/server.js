const express = require("express");

const app = express();

app.get('/', (req, res)=>{
    res.send("Hola Mundo!");
});

app.get('/cotizacion', (err, req, res) =>{
    res.send("Estas en /cotizacion");
});


app.listen(5000, ()=> console.log("App corriendo en puerto 5000!"));