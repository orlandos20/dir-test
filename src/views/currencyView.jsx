import React from 'react';
import { useState, useEffect } from 'react';
import Currency from '../components/currency';
import { getCurrencyData } from '../utils/requests';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: "100%",
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const CurrencyView = (props)=>{
    const classes = useStyles();
    let [currencyData, setCurrencyData] = useState({});
    let currencyDataLoaded = false;
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        if(!currencyDataLoaded){
            getCurrencyData(props.currency).then(data => data)
                .then(result => setCurrencyData( currencyData = result))
                    .then(data => currencyDataLoaded = true )
                    .catch(error => console.log("error in CurrencyView ", error));
        }else{
            currencyDataLoaded = false;        
        }
        setChecked(prev => !prev);
    }, [currencyDataLoaded])

    return(
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
                  <Currency currencyData={currencyData}></Currency>
            </Paper>
          </Slide>
        </div>
      </div>
    )
}

export default CurrencyView;