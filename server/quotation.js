const axios = require("axios");

let list = ()=>{
        return axios.get("http://demo4456880.mockable.io/currency-symbols")
        .then(response => { return response.data.data.List.Currency})
        .catch(error => {console.log("Error retrieving the currencyTypes", error)})
}

let request = async (currency)=>{
    let currencyType;
    
    let currencyVerified = currency.replace("-", " ").replace("%20", " ").toLowerCase();

    let retrieveTheValue = async ()=>{

        let listData = await list();
        
        let filterdData = listData.filter((item)=>{
            return item.Name.toLowerCase() == currencyVerified ? item : undefined;
        })

        if(filterdData){
            currencyType = filterdData[0];
            try{
                const response = await axios.get("https://api.cambio.today/v1/quotes/"+currencyType.Code+"/ARS/json?quantity=1&key=1507|1FL~3eLSEXid42YTB1HLm73i5pOLDMUk");
                const data = response.data;
                const CurrencyData = {
                    "moneda": currency,
                    "precio": data.result.value.toFixed(2)
                }
                return CurrencyData;
            }catch(error){
                return "Error fetching data"
            }
        }else{
            console.log("No hay monedas ");
        }
    }
    return retrieveTheValue();
}


module.exports.request = request;
module.exports.list = list;