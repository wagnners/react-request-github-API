import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import accessStore from './zustand/github';

const Home = React.lazy(() => import('./views/home'));
const GitHub = React.lazy(() => import('./views/github/login'));
const Authorize = React.lazy(() => import('./views/github/authorize'));
const App = React.lazy(() => import('./views/app'));

const AuthRoute = ({ component: Component, authUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/github/login" />
        )
      }
    />
  );
};

const Routes = _ =>{

  const access = accessStore((state) => state.api_access);

  return (
    <Router>
      <Switch>
        <AuthRoute
          path={"/app"}
          authUser={access}
          component={App}
        />
        <Route
          path="/app"
          render={(props) => <App {...props} />}
        />
        <Route
          path="/github/login"
          render={(props) => <GitHub {...props} />}
        />
        <Route
          path="/authorize"
          render={(props) => <Authorize {...props} />}
        />
        <Route
          path="/"
          exact
          render={(props) => <Home {...props} />}
        />
        <Redirect to="/error" />      
      </Switch>
    </Router>
  )
};

export default Routes;
