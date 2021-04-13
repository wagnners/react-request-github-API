import React, { useState, useEffect } from 'react';
import { Alert, Col, Row } from 'reactstrap';
import queryString from 'query-string';
import SideMenu from '../../../components/SideMenu';
import UserRepositoriesLit from '../../../components/UserRepositoriesLit';
import { getUsersRepositories } from '../../../helpers/GitHubApi';
import accessStore from '../../../zustand/github';

const UsersRepositories = ({history}) => { 
    
    const [type, setType]   = useState("users");
    const url               = queryString.parse(history.location.search).q;
    const access            = accessStore((state) => state.api_access);

    const [repositories, setRepositories] = useState(null);

    useEffect(() => {
   
        async function fetch() {
            const results = await getUsersRepositories(url, access);
            setRepositories(results);
        }
       
        fetch();

    }, [access]);

    const handleChangeType = (type) => {
        setType(type);
        history.push(`/app/search?q=bd&type=${type}#`);
    }

    return (
        <Row>
            <Col sm="12" md="3" lg="2">
                <SideMenu handleChangeType={handleChangeType} type={type} />
            </Col>
            <Col className="api-content p-3" sm="12" md="9" lg="10" >
                {repositories === null 
                ? <Col md="12" lg="12" sm="12"><Alert color="warning" className="m-3">Carregando Resultados</Alert></Col> 
                : repositories !== undefined && Array.isArray(repositories) && repositories.length > 0
                    ? <UserRepositoriesLit repositories={repositories} />
                    : repositories !== undefined &&  Array.isArray(repositories) && repositories.length === 0 
                        ? <Alert color="warning" className="m-3">Nenhum respositório encontrado</Alert> 
                        : <Alert color="danger" className="m-3">Erro ao carregar resultados</Alert>
                }
            </Col>
        </Row>  
    );
};

export default UsersRepositories;
