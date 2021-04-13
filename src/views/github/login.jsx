import React from 'react';
import { Button } from 'reactstrap';
import logo from '../../assets/img/github-logo.png';

const GitHubLogin = ({location}) => {
    
    const login = _ => {
       window.location.href = `https://github.com/login/oauth/authorize?client_id=7fb6579a0c6ae5520f29&redirect_uri=http://localhost:3000/authorize`; 
    }

    return (
        <main>
            <div className="container h-100 d-flex justify-content-center mt-3">
                <div className="w-md-25 w-lg-25 w-sm-100 align-self-center text-center github-content">
                    <img src={logo} alt="Logo" width="100" />
                    <h3 className="mt-3">Bem Vindo</h3>
                    <Button color="dark" className="mt-5 text-uppercase" onClick={login}>Login com GitHub</Button>
                </div>
            </div>
        </main>
    );
};

export default GitHubLogin;
