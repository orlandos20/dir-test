import React from 'react';
import QuotationView from './../views/quotationView';
import { Route, useLocation, Link, useRouteMatch } from "react-router-dom";
import Pricing from '../components/pricing';

const Home = (props)=>{
    let location = useLocation();
    let { path, url } = useRouteMatch();
    console.log("location in home ", location);

    const tiers = props.currencyList;

    let tiersFiltered = tiers.filter(tier =>{
        if(tier.Name.toLowerCase() == "dolar" || tier.Name.toLowerCase() == "euro" || tier.Name.toLowerCase() == "real" ){
                return tier;
        }
    })

    let mappingTiers = tiersFiltered.map((item, i) =>{
        return {key: Object.keys(item), value: Object.values(item) }
    })

    let tiersSorted = mappingTiers.sort(function(a,b){
        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
        return 0;
    } );

        let reordered = []

        let aux = ()=>{
            tiersSorted.forEach(tier =>{
                reordered.push({
                    "name": tier.value[0].toLowerCase(),
                    "code": tier.value[1].toLowerCase(),
                    "Symbol": tier.value[2].toLowerCase(),
                })
            })
        } 
    aux();

    return(
        <React.Fragment>
            <Pricing currencies={reordered} />
                   <Route exact path={`${location.pathname/"cotizacion"}`}>
                       <QuotationView currencyList={props.currencyList}></QuotationView>
                    </Route>
            <Link to={`${url+"cotizacion"}`}><span>Ir a Cotizacion</span></Link>
        </React.Fragment>
    )

}

export default Home;