import React from 'react';
import './App.less';
import Main from './components/main/main';
import { useState, useEffect } from 'react';
import {getCurrencyList} from './utils/requests';
import Home from './views/home';
import QuotationView from './views/quotationView';
import CurrencyView from './views/currencyView';
import store from './store';
import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams
  } from "react-router-dom";


function App(){ 
    
    let currencyList;

    useEffect(()=>{
        currencyList = getCurrencyList("http://localhost:5000/cotizacion")
        .then(response => { 
            store.dispatch({
                type: "CURRENCY_LIST",
                results: response
            })
        })
        
    }, [])

    return(
        <Router>
            <React.Fragment>
            <h1>Hola mundo desde React</h1>
            <Switch>
                <Route exact path="/">
                <Home></Home>
                </Route>

                <Route exact path="/cotizacion">
                    <QuotationView></QuotationView>
                </Route>

                <Route path="/cotizacion/:currency"
                    render={({ match }) => {
                        // Do whatever you want with the match...
                        return <CurrencyView currency={match.params.currency}></CurrencyView>;
                }} />
            </Switch>
            </React.Fragment>
        </Router>
    )
}

export default App;