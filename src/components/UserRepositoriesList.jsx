import React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';

const UserRepositoriesList = ({repositories}) => {
  
    return (
        <Row>
            {repositories.map((repositorie) => (
                <Col md="12" lg="12" sm="12" className="mb-3" key={repositorie.id}>
                    <Card>
                        <Row>
                            <Col md="12">
                                <CardBody>
                                    <CardTitle tag="h2">{repositorie.name}</CardTitle>
                                    <CardText>{"Usuário: " + repositorie.owner.login}.</CardText>
                                    <CardText><a href={repositorie.html_url} target="_blank" rel="noreferrer">{repositorie.html_url}</a></CardText>
                                    {repositorie.language && (<CardText ng>{repositorie.language}</CardText>)}
                                </CardBody>
                            </Col>
                        </Row>
                    
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default UserRepositoriesList;