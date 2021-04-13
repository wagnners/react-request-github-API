import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
    <Suspense fallback={<div className="loading" />}>  
        <App />,
    </Suspense>,
    document.getElementById('root')
);
