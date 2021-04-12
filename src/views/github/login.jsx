import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from 'reactstrap';
import logo from '../../assets/img/github-logo.png';

const GitHubLogin = ({location}) => {
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0();

    return (
        <main>
            <div className="container h-100 d-flex justify-content-center mt-3">
                <div className="w-md-25 w-lg-25 w-sm-100 align-self-center text-center github-content">
                    <img src={logo} alt="Logo" width="100" />
                    <h3 className="mt-3">Bem Vindo</h3>
                    <Button color="dark" className="mt-5 text-uppercase" onClick={loginWithRedirect}>Login com GitHub</Button>
                </div>
            </div>
        </main>
    );
};

export default GitHubLogin;
