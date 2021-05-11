import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppLayout from './layout';

const Search = React.lazy(() => import('./search'));

const App = (props) => {

  return (
    <AppLayout {...props}>
        <Switch>
            <Route
                path={`${props.match.url}/search`}
                render={(props) => <Search {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </AppLayout>
  );
};

export default App;
