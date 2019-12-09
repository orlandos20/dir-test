import React from 'react';
import './App.less';
import { useState, useEffect } from 'react';
import {getCurrencyList} from './utils/requests';
import Home from './views/home';
import QuotationView from './views/quotationView';
import CurrencyView from './views/currencyView';
import SearchAppBar from './components/header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from './store';




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

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" className="App">
                <Router>
                    <SearchAppBar></SearchAppBar>
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
                </Router>
            </Container>
        </React.Fragment>



       
    )
}

export default App;