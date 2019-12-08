import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Currency = (props)=>{

    let [currencyInfo, setCurrencyInfo] = useState({})

    useEffect(()=>{
        setCurrencyInfo( currencyInfo = props.currencyData)
    }, [props.currencyData])

    let currency = currencyInfo.moneda;
    let price = currencyInfo.precio;

    return(
        <div>
            <span>{currency} </span>
            <span> {price}</span>
        <Link to="/cotizacion">volver atrás</Link>
        </div>
    )
}

export default Currency;