import React from 'react';
import { useState, useEffect } from 'react';
import { useRouteMatch, NavLink, Link } from 'react-router-dom';
import { getCurrencyData } from '../utils/requests';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';


const LoaderUseStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: "64px",
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
  function LinearIndeterminate() {
    const Loaderclasses = LoaderUseStyles();
  
    return (
      <div className={Loaderclasses.root}>
        <LinearProgress color="secondary" />
      </div>
    );
  }

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

export default function Pricing(props) {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  const tiers = props.currencies;

    let currencyDataLoaded = false;
    const [checked, setChecked] = useState(false);
    let quotationResponse = [];
    let [dataLoaded, setDataLoaded ] = useState([]);

        let req = (data)=>{
            data.forEach(item =>{
            getCurrencyData(item.name).then(data => data)
            .then(result => tiers.map(item =>{
                if(result.moneda == item.name){
                    let auxObj = {
                        "price": result.precio
                    }
                    Object.assign(item, auxObj)
                }
                setChecked(prev => !prev);
            }))
            .then(data => setDataLoaded(dataLoaded = data))
            
                .catch(error => console.log("error in CurrencyView ", error));
            })
        }

    useEffect(()=>{

        if( !currencyDataLoaded ){
            currencyDataLoaded = true;
            req(tiers);
        }else{
            setChecked(prev => !prev);
            currencyDataLoaded = false; 
        }

        const refresh = setInterval(()=>{
          req(tiers);
        }, 5000);
        
        return () => clearInterval(refresh);
        
    }, [])
  
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      {
        !checked &&  <LinearIndeterminate />
      }
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Currency Quotation App
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
            keep up to date with the prices of the most demanded currencies in the market
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {dataLoaded && tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.code} xs={12} md={4}>
              <Link to={`${"cotizacion/"+tier.name}`}>
              <Card>
                <CardHeader
                  title={tier.name}
                //   subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                //   action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                    <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                        ${tier.price}
                        </Typography>
                    </div>
                    <div className={classes.cardPricing}>
                        <Typography variant="h6" color="textSecondary">
                        /ARS {tier.name}
                        </Typography>
                    </div>
                  {/* <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul> */}
                </CardContent>
                {/* <CardActions>
                <NavLink to={`${"/cotizacion/"+tier.name}`}>
                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                        "See Quotation"
                    </Button>
                </NavLink>
                </CardActions> */}
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      {/* <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container> */}
      {/* End footer */}
    </React.Fragment>
  );
}