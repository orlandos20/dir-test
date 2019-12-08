import React from 'react';
import { Link, useRouteMatch, NavLink } from 'react-router-dom';

const QuotationItem = (props) =>{
    let { path, url } = useRouteMatch();
    return(
        <li>
            <NavLink to={`${url+"/"+props.itemData.Name}`}><span>{props.itemData.Name}</span></NavLink>
        </li>
    )

}

export default QuotationItem;