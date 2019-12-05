// const axios = require("axios");
// const express = require('express');
// const router = express.Router();
// const quotation = require("./quotation");
// let currencyList = []


// let list = async ()=>{
//     try{
//         const response = await axios.get("http://demo4456880.mockable.io/currency-symbols");
//         let data = response.data;
//         return data;
//     }catch{
//         console.log("Error retrieving the currencyTypes");
//     }
// }

// router.use( '/', async (req, res, next) =>{
//     currencyList = await list();
//     next();
// });

// router.use('/cotizacion', async (req, res, next) =>{
//     res.send( await currencyList)
//     next();
// })

// router.use('/cotizacion/:currency', async(req, res, next) =>{
//     res.send(await quotation.request(req.params.currency))
//     next();
// })


// module.exports = router;