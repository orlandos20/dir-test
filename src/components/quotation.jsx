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

const QuotationList = (props)=>{
    let location = useLocation()

    let [results, setResults] = useState([]);
    let dataLoaded = false;

    useEffect(()=>{
        if(props.currencyList){
            setResults(results = props.currencyList)
            dataLoaded = true;
        }else{
            dataLoaded = false;
        }
    }, [dataLoaded])

    let paint = results.map(item=>{
        return <QuotationItem key={item.Code} itemData={item}></QuotationItem>;
    })

    return(

        <React.Fragment>
                {paint}
        </React.Fragment>
    )
}

export default QuotationList;