import React from 'react';
import { useState, useEffect } from 'react';
import { useRouteMatch, NavLink, useLocation } from 'react-router-dom';
import store from '../store';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const LoaderUseStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: "64px",
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const useStyles = makeStyles(theme => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
      },
      li: {
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));
  
  function LinearIndeterminate() {
    const LoaderClasses = LoaderUseStyles();
  
    return (
      <div className={LoaderClasses.root}>
        <LinearProgress color="secondary" />
      </div>
    );
  }

const Currency = (props)=>{
  const classes = useStyles();
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
        {
          !currency && <LinearIndeterminate />
        }
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
       
      


        // <div style={{marginTop: "64px"}}>
        //      {
        //         !currency && <LinearIndeterminate />
        //     }
        //     <span>{currency} </span>
        //     <span> {price}</span>
          // <Link to="/cotizacion">volver atrás</Link>
          // </div>
    )
}

export default Currency;