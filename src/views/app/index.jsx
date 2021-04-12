import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppLayout from './layout';


const Search = React.lazy(() => import('./search'));

const App = ({ match }) => {
  return (
    <AppLayout>
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/search`} />
            <Route
                path={`${match.url}/search`}
                render={(props) => <Search {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </AppLayout>
  );
};

export default App;
