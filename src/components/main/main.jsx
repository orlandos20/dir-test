import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Main = ()=>{
 
    let [results, setResults] = useState([]);
    let resp;
    
        let req = ()=>{
            return axios.get("http://localhost:5000/cotizacion")
            .then(response => {return response.data})
            .catch(error => {console.log("errorrrr")});
        }

        useEffect(() => {
            req().then(data=>{setResults(results = data)});
        }, [])

        if(results) resp = results;

        let pintar = resp.map(item=>{
            return <li>{item.Name}</li>;
        })

    return(
        <div>
            <div>
                {pintar}</div>
        </div>
    )
}

export default Main;