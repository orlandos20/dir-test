import React from 'react';
import { useState, useEffect } from 'react';
import QuotationItem from './quotationItem';

const QuotationList = (props)=>{

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
        return <QuotationItem key={item.Code} itemData={item}></QuotationItem>
    })

    return(
        <React.Fragment>
            <ul>
                {paint}
            </ul>
        </React.Fragment>
    )
}

export default QuotationList;