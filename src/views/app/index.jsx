import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppLayout from './layout';

const Search = React.lazy(() => import('./search'));
const UsersRepositories = React.lazy(() => import('./users/repositories'));

const App = ({ match, history }) => {

  return (
    <AppLayout history={history}>
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/search`} />
            <Route
                path={`${match.url}/search`}
                render={(props) => <Search {...props} />}
            />
            <Route
                path={`${match.url}/user/repositories`}
                render={(props) => <UsersRepositories {...props} />}
            />
            <Route
                path={`${match.url}/user/starred`}
                render={(props) => <UsersRepositories {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </AppLayout>
  );
};

export default App;
