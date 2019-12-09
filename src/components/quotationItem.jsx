import React from 'react';
import { Link, useRouteMatch, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const QuotationItem = (props) =>{
    const classes = useStyles();

    let { path, url } = useRouteMatch();
    return(

        <List component="nav" className={classes.root} aria-label="currencies">
            <NavLink to={`${url+"/"+props.itemData.Name}`}>
                <ListItem button>
                    <ListItemText primary={props.itemData.Name}>
                    </ListItemText>
                </ListItem>
            </NavLink>
        </List>

    )

}

export default QuotationItem;