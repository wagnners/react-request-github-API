import React from 'react';
import { Button } from 'reactstrap';
// https://api.github.com/users/wagnners/repos
const ButtonsUser = ({user, handleBtnRepositoriesList}) => {

    return (
        <div className="card-buttons">
            <Button onClick={() => handleBtnRepositoriesList(user,"repositories")}>Repositórios</Button>
            <Button onClick={() => handleBtnRepositoriesList(user, "starred")}>Mais Visitados</Button> 
        </div>
    );
};

export default ButtonsUser;