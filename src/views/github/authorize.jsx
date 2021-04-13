import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { getToken } from '../../helpers/GitHubApi';
import accessStore from '../../zustand/github';

const Authorize = ({location}) => {

    const [data, setData] = useState(false);
    const addAccess = accessStore(state => state.addAccess);    

    useEffect(() => {

        async function fetch() {
            const results = await getToken(location.search);
            addAccess(results);
            setData(results);
        }
        
        fetch();

    });

    return (
        <>
           {data &&  <Redirect to="/" />}
        </>
    )
};

export default Authorize;

