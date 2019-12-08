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
    
    let [currencyList, setCurrencyList] = useState([]);

    let dataInLocalStorage;

    useEffect(()=>{
        if(!dataInLocalStorage){
            getCurrencyList("http://localhost:5000/cotizacion")
            .then(response => response)
            .then(data =>{
            localStorage.setItem("currencyList", JSON.stringify(data))
            dataInLocalStorage = JSON.parse(localStorage.getItem("currencyList"))
            setCurrencyList(currencyList = dataInLocalStorage)
            })
            .catch(error => console.log("error ", error));
        }   
    }, [currencyList])

    dataInLocalStorage = JSON.parse(localStorage.getItem("currencyList"));

    return(
        <Router>
            <React.Fragment>
            <h1>Hola mundo desde React</h1>
            <Switch>
                <Route exact path="/">
                    {
                        dataInLocalStorage &&  <Home currencyList={dataInLocalStorage}></Home>
                    }
                </Route>

                <Route exact path="/cotizacion">
                    {
                        dataInLocalStorage &&  <QuotationView currencyList={dataInLocalStorage}></QuotationView>
                    }
                   
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