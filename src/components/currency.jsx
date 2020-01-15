import React from 'react';
import { useState, useEffect } from 'react';
import { useRouteMatch, NavLink, useLocation } from 'react-router-dom';
import store from '../store';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {currencyUseStyles} from './makeStyles';
  
const Currency = (props)=>{
  const classes = currencyUseStyles();
  let { path, url } = useRouteMatch();

  let paramToShow = url.split("/").pop(2);

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
      <React.Fragment>
        <Card>
            <CardHeader
              title={paramToShow}
            //   subheader={tier.subheader}
              titleTypographyProps={{ align: 'center' }}
              subheaderTypographyProps={{ align: 'center' }}
            //   action={tier.title === 'Pro' ? <StarIcon /> : null}
              className={classes.cardHeader}
            />
            <CardContent>
                <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                    ${price}
                    </Typography>
                </div>
                <div className={classes.cardPricing}>
                    <Typography variant="h6" color="textSecondary">
                    /ARS {currency}
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                <NavLink to={`${"/cotizacion"}`}>
                    <Button fullWidth color="primary">
                        Go back
                    </Button>
                </NavLink>
                </CardActions>
        </Card>
      </React.Fragment>
    )
}

export default Currency;