import React from 'react';
import {useState, useEffect} from 'react';
import { useRouteMatch, NavLink, useLocation } from 'react-router-dom';
import Quotation from './../components/quotation'  
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

const QuotationView = (props)=>{
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
      setChecked(prev => !prev);
    }, [props.currencyList])

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
              <Quotation currencyList={props.currencyList}></Quotation>
            </Paper>
          </Slide>
        </div>
      </div>
    );
}

export default QuotationView;