import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useState, useEffect } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LinearProgress from '@material-ui/core/LinearProgress';
import store from '../store';
import { useHistory, Link } from 'react-router-dom';
import { loaderUseStyles, headerUseStyles } from './makeStyles';

  
  function LinearIndeterminate() {
    const loaderClasses = loaderUseStyles();
  
    return (
      <div className={loaderClasses.root}>
        <LinearProgress color="secondary" style={{height: "4px"}} />
        
      </div>
    );
  }

export default function SearchAppBar() {
  const classes = headerUseStyles();
  const [checked, setChecked] = useState(false);
  let history = useHistory();

  let currencyInfo;

  const handleSearch = (e) =>{
    e.preventDefault();
    if(e.keyCode == 13){
      let searchTarget = "/cotizacion/"+e.target.value;
      history.push(`${searchTarget}`)
    }
  };

  const cleanSearch = (e) =>{
    e.preventDefault();
    e.target.value = "";
  }

  useEffect(()=>{
    store.subscribe(()=>{
      currencyInfo = store.getState().CurrencyData;
      if(Object.keys(currencyInfo).length > 1 ){
        setChecked(prev => !prev);
      }else{
        setChecked(prev => !prev);
      }
    })
  }, [])


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          
          
              <Typography className={classes.title} variant="h6" noWrap >
              <Link to="/">
                Currency Quotation App
                </Link>
              </Typography>
        
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              className={classes.inputRoot, classes.inputInput}
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={handleSearch} onBlur={cleanSearch}
            />
          </div>
        </Toolbar>
      </AppBar>
          {
            checked && < LinearIndeterminate />
          }
    </div>
  );
}