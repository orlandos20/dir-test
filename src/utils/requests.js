import axios from 'axios';

  let getCurrencyList = (url)=>{
    return axios.get(url)
    .then(response => {return response.data})
    .catch(error => {console.log("error ", error)});
}

let getCurrencyData = (currency)=>{
  let host = `${"http://localhost:5000/cotizacion/"+currency}`;
    return axios.get(host)
    .then(response =>{ return response.data })
    .catch( error => { console.log("error ", error)});
}


export {getCurrencyList, getCurrencyData};