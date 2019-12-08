import { createStore } from 'redux';

const reducer = (state, action) => {
    if(action.type === "CURRENCY_LIST"){
        return {
            results: state.results.concat(action.results)
        }
    }

    return state;
}


export default createStore(reducer, {results: [] });