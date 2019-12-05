const express = require("express");
const quotation = require("./quotation");
// const currencyTypes = require("./currencyTypes");


const app = express();

app.get('/', (req, res, next)=>{
    res.send("Hola Mundo!");
    next();
});

app.all('/cotizacion', async (req, res, next) =>{
    res.send( await quotation.list())
    next();
});

app.use('/cotizacion/:currency', async (req, res, next)=>{
    res.send(await quotation.request(req.params.currency));
    next();
});


app.listen(5000, ()=> console.log("App corriendo en puerto 5000!"));