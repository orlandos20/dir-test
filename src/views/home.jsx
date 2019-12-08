import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import QuotationView from './../views/quotationView';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Link,
    useRouteMatch
  } from "react-router-dom";
  import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";


const Home = (props)=>{
    let location = useLocation();
    let { path, url } = useRouteMatch();
    console.log("location in home ", location)
    return(
        // <div>
        //     <h2>Estas en la Home</h2>
        // </div>
            <div style={{backgroundColor: "green" }}>
            <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={1000}
            >
                <Switch location={location}>
                    <Route exact path={`${location.pathname/"cotizacion"}`}>
                    <QuotationView currencyList={props.currencyList}></QuotationView>
                    </Route>
                </Switch>
            </CSSTransition>
            </TransitionGroup>
            <Link to={`${url+"cotizacion"}`}><span>Ir a Cotizacion</span></Link>
            </div>
    )

}

export default Home;