const axios = require("axios");
let determineTheCurrency = [];

let list = async ()=>{
    try{
        const response = await axios.get("http://demo4456880.mockable.io/currency-symbols");
        let data = response.data.data;
        determineTheCurrency = data.List.Currency;
        console.log("determineTheCurreny en el lis() ", determineTheCurrency);
        return data.List.Currency;
    }catch{
        console.log("Error retrieving the currencyTypes");
    }
}

let request = async (currency)=>{
    let currencyType;
    
    let currencyVerified = currency.replace("-", " ").replace("%20", " ").toLowerCase();

    let retrieveTheValue = async ()=>{

        console.log("currencyType en el retrieveTheValue ", currencyType)
        try{
            const response = await axios.get("https://api.cambio.today/v1/quotes/"+currencyType[0].Code+"/ARS/json?quantity=1&key=1507|1FL~3eLSEXid42YTB1HLm73i5pOLDMUk");
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

    let filteredData = (data)=>{
        currencyType = data.filter((item)=>{
            return item.Name.toLowerCase() == currencyVerified ? item : undefined;
        })
        
    }

    if(determineTheCurrency && determineTheCurrency.length > 0){
        console.log("determineTheCurrency ", determineTheCurrency);
        filteredData(determineTheCurrency)
        console.log("currencyType ", currencyType[0]);
        return retrieveTheValue()
    }else{
        list().then( filteredData(determineTheCurrency) ).then( retrieveTheValue() );
    }
}

module.exports.request = request;
module.exports.list = list;