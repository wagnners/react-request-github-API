import React, { useState } from 'react';
import queryString from 'query-string';
import { Row, Col } from 'reactstrap';
import SideMenu from '../../../components/SideMenu';
import Users from '../users';
import Repositories from '../repositories';
import MostSeen from '../mostSeen';
import UsersRepositories from '../users/repositories';

const Search = (props) => { 

    const values = queryString.parse(props.location.search);
    const [type, setType] = useState(values.type);
    
    const handleChangeType = (type) => {

        setType(type);
        props.history.push(`/app/search?q=${values.q}&type=${type}`);

       
    }

    return (
        <Row>
            <Col sm="12" md="3" lg="2">
                <SideMenu handleChangeType={handleChangeType} type={type} />
            </Col>
            <Col className="api-content p-3" sm="12" md="9" lg="10" >
                {type === "users" && <Users query={values.q} {...props}/>}
                {type === "repositories" && <Repositories query={values.q} {...props} />}
                {type === "moost_seen" && <MostSeen {...props}/>}
                {type === "user_repositories" && <UsersRepositories {...props}/>}
            </Col>
        </Row>  
    );
};

export default Search;
