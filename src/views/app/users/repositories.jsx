import React, { useState, useEffect } from 'react';
import { Alert, Col } from 'reactstrap';
import queryString from 'query-string';
import UserRepositoriesList from '../../../components/UserRepositoriesList';
import { getUsersRepositories } from '../../../helpers/GitHubApi';
import accessStore from '../../../zustand/github';

const UsersRepositories = ({history}) => { 
    
    const url               = queryString.parse(history.location.search).url;
    const access            = accessStore((state) => state.api_access);

    const [repositories, setRepositories] = useState(null);

    useEffect(() => {
   
        async function fetch() {
            const results = await getUsersRepositories(url, access);
            setRepositories(results);
        }
       
        fetch();

    }, [access]);

    return (
        <>           
            {repositories === null 
            ? <Col md="12" lg="12" sm="12"><Alert color="warning" className="m-3">Carregando Resultados</Alert></Col> 
            : repositories !== undefined && Array.isArray(repositories) && repositories.length > 0
                ? <UserRepositoriesList repositories={repositories} />
                : repositories !== undefined &&  Array.isArray(repositories) && repositories.length === 0 
                    ? <Alert color="warning" className="m-3">Nenhum respositório encontrado</Alert> 
                    : <Alert color="danger" className="m-3">Erro ao carregar resultados</Alert>
            }
        </>  
    );
};

export default UsersRepositories;
