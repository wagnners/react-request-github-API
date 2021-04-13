import React, { useState, useEffect } from 'react';
import { Alert, Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';
import { getRepositoriesMostSeen} from '../../../helpers/GitHubApi';
import accessStore from '../../../zustand/github';

const MostSeen = () => { 

    const access = accessStore((state) => state.api_access);

    const [repositories, setRepositories] = useState(null);

    useEffect(() => {
        
        async function fetch() {
            const results = await getRepositoriesMostSeen(access);
            setRepositories(results);
        }
       
        fetch();

    }, [access]);

    return (
       <Row>
             {repositories === null ? <Col md="12" lg="12" sm="12"><Alert color="warning" className="m-3">Carregando Resultados</Alert></Col> : 
                repositories && Array.isArray(repositories) && repositories.length > 0 ? repositories.map((repositorie, index) => (
                    <Col md="12" lg="12" sm="12" className="mb-3" key={repositorie.id}>
                        <Card>
                            <Row>
                                <Col md="12">
                                    <CardBody>
                                        <CardTitle tag="h2">{"#"+(index+1) + " " + repositorie.name}</CardTitle>
                                        <CardText>{"Usuário: " + repositorie.owner.login}.</CardText>
                                        <CardText><a href={repositorie.html_url} target="_blank" rel="noreferrer">{repositorie.html_url}</a></CardText>
                                        {repositorie.language && (<CardText ng>{repositorie.language}</CardText>)}
                                    </CardBody>
                                </Col>
                            </Row>                           
                        </Card>
                    </Col>
                ))
                : Array.isArray(repositories) && repositories.length === 0 
                    ? <Alert color="warning" className="m-3">Nenhum repositório encontrado</Alert>
                    : <Alert color="alert" className="m-3">Erro ao carregar repositórios.</Alert>
            }
       </Row>
    );
};

export default MostSeen;
