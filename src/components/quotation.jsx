import React from 'react';
import { useState, useEffect } from 'react';
import store from '../store';
import QuotationItem from './quotationItem';
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



const QuotationList = ()=>{
    // let location = useLocation()

    let [results, setResults] = useState([]);

    store.subscribe(()=>{
       setResults(results = store.getState().results)
    })

    let paint = results.map(item=>{
        return <QuotationItem itemData={item}></QuotationItem>;
    })

    return(

        <React.Fragment>
                {paint}
        </React.Fragment>
    )
}

export default QuotationList;