import React from 'react';
import { Button } from 'reactstrap';

const ButtonsUser = ({user, handleBtnRepositoriesList}) => {

    return (
        <div className="card-buttons">
            <Button size="sm" onClick={() => handleBtnRepositoriesList(user,"repositories")}>Repositórios</Button>
            <Button size="sm" onClick={() => handleBtnRepositoriesList(user, "starred")}>Mais Visitados</Button> 
        </div>
    );
};

export default ButtonsUser;