import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const QuotationItem = (props) =>{
    let { path, url } = useRouteMatch();
    return(
        <li key={props.itemData.Code}>
            <Link to={`${url+"/"+props.itemData.Name}`}><span>{props.itemData.Name}</span></Link>
        </li>
    )

}

export default QuotationItem;