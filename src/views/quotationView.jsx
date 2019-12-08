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


const QuotationView = ()=>{
    // let location = useLocation();
    return(

    //     <div style={{backgroundColor: "red" }}>
    //     <TransitionGroup>
    //       <CSSTransition
    //         key={location.key}
    //         classNames="fade"
    //         timeout={300}
    //       >
    //           <Switch location={location}>
    //               <Route exact path="/cotizacion/">
    //               <Quotation></Quotation>
    //               </Route>
    //           </Switch>
    //       </CSSTransition>
    //     </TransitionGroup>
    //   </div>

        <Quotation></Quotation>
    )

}

export default QuotationView;