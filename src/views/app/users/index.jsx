import React, { useState, useEffect } from 'react';
import { Alert, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap';
import ButtonsUser from '../../../components/ButtonsUser';
import { getUsers } from '../../../helpers/GitHubApi';
import accessStore from '../../../zustand/github';

const Users = ({query, history}) => { 

    const access = accessStore((state) => state.api_access);

    const [users, setUsers] = useState(null);

    useEffect(() => {
        
        async function fetch() {
            const results = await getUsers(query, access);
            setUsers(results);
        }
       
        fetch();

    }, access);

    const handleBtnRepositoriesList = (user, type) => {;
 
        if(type === "repositories"){

            const url  = `https://api.github.com/users/${user}/repos`;

            history.push({
                pathname: '/app/user/repositories',
                search: '?q='+url    
            });

        }else{

            const url  = `https://api.github.com/users/${user}/starred`;

            history.push({
                pathname: '/app/user/starred',
                search: '?q='+url    
            });
        }
    }

    return (
       <Row>
            {users === null ? <Col md="12" lg="12" sm="12"><Alert color="warning" className="m-3">Carregando Resultados</Alert></Col> : 
                users && Array.isArray(users) && users.length > 0 ? users.map((user) => (
                    <Col md="12" lg="12" sm="12" className="mb-3" key={user.id}>
                        <Card>
                            <Row>
                                <Col md="2">
                                    <CardImg top height="100%" src={user.avatar_url} alt="Avatar" />
                                </Col>
                                <Col md="10">
                                    <CardBody>
                                        <CardTitle tag="h5">{user.login}</CardTitle>
                                        <CardText>{user.html_url}.</CardText>
                                        <ButtonsUser handleBtnRepositoriesList={handleBtnRepositoriesList} user={user.login} />
                                    </CardBody>
                                </Col>
                            </Row>
                           
                        </Card>
                    </Col>
                ))
                : Array.isArray(users) && users.length === 0 
                    ? <Alert color="warning" className="m-3">Nenhum usuário encontrado</Alert>
                    : <Alert color="alert" className="m-3">Erro ao carregar usuários.</Alert>
            }
       </Row>
    );
};

export default Users;
