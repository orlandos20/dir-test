import { createStore } from 'redux';

const reducer = (state, action) => {
    if(action.type === "CURRENCY_LIST"){
        let dataInLocalStorage = JSON.parse(localStorage.getItem("currencyList"));
        return {
            results: state.results.concat(dataInLocalStorage)
        }
    }

    return state;
}


export default createStore(reducer, {results: [] });