const express = require("express");
const cors = require('cors');
const quotation = require("./quotation");

const app = express();

app.all( cors() );

app.get('/', (req, res, next)=>{
    res.send("Hola Mundo!");
    next();
});

app.all('/cotizacion', async (req, res, next) =>{
    cors(), res.send( await quotation.list())
    next();
});

app.use('/cotizacion/:currency', async (req, res, next)=>{
    res.send(await quotation.request(req.params.currency));
    next();
});

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), function() {
    console.log('listening');
});