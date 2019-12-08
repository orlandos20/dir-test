import React from 'react';
import { useState, useEffect } from 'react';
import Currency from '../components/currency';
import { getCurrencyData } from '../utils/requests';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    Link
  } from "react-router-dom";
  import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";

const CurrencyView = (props)=>{
    let location = useLocation();
    console.log("location in currencyView ", location)
    let [currencyData, setCurrencyData] = useState({});
    let currencyDataLoaded = false;

    useEffect(()=>{
        if(!currencyDataLoaded){
            getCurrencyData(props.currency).then(data => data)
                .then(result => setCurrencyData( currencyData = result))
                    .then(data => currencyDataLoaded = true )
                    .catch(error => console.log("error in CurrencyView ", error));
        }else{
            currencyDataLoaded = false;        
        }
    }, [currencyDataLoaded])

    return(

        <div style={{backgroundColor: "blue" }}>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          >
              <Switch location={location}>
                  <Route exact path={`${location.pathname}`}>
                    <Currency currencyData={currencyData}></Currency>
                  </Route>
              </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>


        // <React.Fragment>
        //     <h3>currency</h3>
        //         <Currency currencyData={currencyData}></Currency>
        // </React.Fragment>
    )

}

export default CurrencyView;