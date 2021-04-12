import axios from 'axios';
import React, { useEffect, useState } from 'react';
import queryString from 'query-string';


const Search = ({location}) => {
    
    const querie_values = queryString.parse(location.search);

    const api = {
        url: "https://api.github.com",
        clientId: "7fb6579a0c6ae5520f29",
        clientSecret: "e43007a7f08de3e370760ce0545b7f359ca12f51",

    }
    const [state, setState] = useState({
        users: null,
    });

    // useEffect(() => {
    //     if(querie_values.type === "users"){
            

    //         axios.get(`https://github.com/login/oauth/authorize?client_id=${api.clientId}`,{
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*"
    //             }
    //         })
    //         .then(res => {
    //            console.log(res);
    //         })    
    //     }
    // }, [state.users]);

    return (
       <h1>Teste 1</h1>
    );
};

export default Search;
