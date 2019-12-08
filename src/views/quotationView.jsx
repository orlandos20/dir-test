import React from 'react';
import Quotation from './../components/quotation'   
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


const QuotationView = (props)=>{
    let location = useLocation();
    console.log("location in QuotationView", location);
    return(

        <div style={{backgroundColor: "red" }}>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={1000}
          >
              <Switch location={location}>
                  <Route exact path={`${location.pathname}`}>
                  <Quotation currencyList={props.currencyList}></Quotation>
                  </Route>
              </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>

        // <Quotation currencyList={props.currencyList}></Quotation>
    )

}

export default QuotationView;