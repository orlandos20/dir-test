import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
  function LinearIndeterminate() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <LinearProgress color="secondary" />
      </div>
    );
  }

const Currency = (props)=>{

    let [currencyInfo, setCurrencyInfo] = useState({})

    useEffect(()=>{
        setCurrencyInfo( currencyInfo = props.currencyData)
        if(currencyInfo){
            store.dispatch({
                type: "CURRENCY_DATA_LOADED",
                CurrencyData: currencyInfo
            })
        }
    }, [props.currencyData])

    let currency = currencyInfo.moneda;
    let price = currencyInfo.precio;

    return(
        <div style={{marginTop: "64px"}}>
             {
                !currency && <LinearIndeterminate />
            }
            <span>{currency} </span>
            <span> {price}</span>
        <Link to="/cotizacion">volver atrás</Link>
        </div>
    )
}

export default Currency;