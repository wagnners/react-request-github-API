import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Home = React.lazy(() => import('./views/home'));
const GitHub = React.lazy(() => import('./views/github/login'));
const App = React.lazy(() => import('./views/app'));

const AuthRoute = ({ component: Component, authUser, ...rest }) => {
  alert(authUser);
  return (
    <Route
      {...rest}
      render={(props) =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/github" />
        )
      }
    />
  );
};

const Routes = _ =>{

  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  console.log(user);


  return (
    <Router>
      <Switch>
        <Route
          path="/github/login"
          render={(props) => <GitHub {...props} />}
        />
        <Route
          path="/app"
          render={(props) => <App {...props} />}
        />
        <Route
          path="/home"
          render={(props) => <Home {...props} />}
        />GitHub
        <Route
          path="/"
          exact>
            {isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/github/login" />}
        </Route>
        <Redirect to="/error" />      
      </Switch>
    </Router>
  )
};

export default Routes;
