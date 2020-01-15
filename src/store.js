import { createStore } from 'redux';

const reducer = (state, action) => {
    if(action.type === "CURRENCY_LIST"){
        let dataInLocalStorage = JSON.parse(localStorage.getItem("currencyList"));
        return {
            results: state.results.concat(action)
        }
    }
    if(action.type === "CURRENCY_DATA_LOADED"){
        return{
            CurrencyData: state.CurrencyData.concat(action.CurrencyData)
        }
    }

    return state;
}


export default createStore(reducer, {results: [], CurrencyData: [] });