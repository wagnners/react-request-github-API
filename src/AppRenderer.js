import { Auth0Provider } from '@auth0/auth0-react';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
    <Suspense fallback={<div className="loading" />}>  
        <Auth0Provider
            domain="github.com/login/"
            clientId="7fb6579a0c6ae5520f29"
            redirectUri={window.location.origin}>
            <App />
        </Auth0Provider>,
    </Suspense>,
    document.getElementById('root')
);
