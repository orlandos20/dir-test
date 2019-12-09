import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useState, useEffect } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LinearProgress from '@material-ui/core/LinearProgress';
import store from '../store';
import { Redirect } from 'react-router-dom'


const useStylesLoader = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
  function LinearIndeterminate() {
    const loaderClasses = useStylesLoader();
  
    return (
      <div className={loaderClasses.root}>
        <LinearProgress color="secondary" />
        
      </div>
    );
  }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  let currencyInfo;

  const handleSearch = (e) =>{
    e.preventDefault();
    if(e.keyCode == 13){
      let redirectTo = "/cotizacion/"+e.target.value;
      console.log("redirecTo ", redirectTo);
      <Redirect to={`${redirectTo}`} />
    }
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
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography className={classes.title} variant="h6" noWrap>
            Currency Quotation App
          </Typography>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={handleSearch}
            />
          </div> */}
        </Toolbar>
      </AppBar>
      {
        checked && < LinearIndeterminate />
      }
    </div>
  );
}