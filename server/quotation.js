const axios = require("axios");

let request = async (currency)=>{
    let currencyType = "";
    switch(currency){
        case 'dolar' : currencyType = "USD";
        break;
        case 'euro' : currencyType = "EUR";
        break;
        case 'real' : currencyType = "R$";
        break;
        default : 'dolar';
    }
    try{
        const response = await axios.get("https://api.cambio.today/v1/quotes/"+currencyType+"/ARS/json?quantity=1&key=1507|1FL~3eLSEXid42YTB1HLm73i5pOLDMUk");
        const data = response.data;
        const CurrencyData = {
            "moneda": currency,
            "precio": data.result.value.toFixed(2)
        }
        return CurrencyData;
    }catch(error){
        return "Error fetching data"
    }
}

module.exports.request = request;