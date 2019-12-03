let quotation = ()=>{
    fetch("https://api.cambio.today/v1/quotes/USD/ARS/json?quantity=1&key=1507|1FL~3eLSEXid42YTB1HLm73i5pOLDMUk")
    .then(res = ()=>{response.json()})
    .then(data => {return data});
}

module.exports.quotation = quotation;