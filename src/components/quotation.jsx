import React from 'react';
import { useState, useEffect } from 'react';
import QuotationItem from './quotationItem';
import Button from '@material-ui/core/Button';
import { useRouteMatch, NavLink, useLocation } from 'react-router-dom';

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
            <ul style={{marginTop: "80px"}}>
            <NavLink to={`${"/"}`}>
                <Button  color="primary">
                        Go back
                </Button>
            </NavLink>
                {paint}
            </ul>
        </React.Fragment>
    )
}

export default QuotationList;