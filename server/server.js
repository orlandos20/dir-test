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

app.use('/cotizacion/:currency', async (req, res, next)=>{
    res.send(await quotation.request(req.params.currency));
    next();
});


app.listen(5000, ()=> console.log("App corriendo en puerto 5000!"));