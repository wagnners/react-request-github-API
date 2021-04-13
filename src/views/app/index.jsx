import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppLayout from './layout';

const Search = React.lazy(() => import('./search'));
const UsersRepositories = React.lazy(() => import('./users/repositories'));

const App = ({ match, history }) => {

  return (
    <AppLayout history={history}>
        <Switch>
   
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
