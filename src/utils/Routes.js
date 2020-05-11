import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({component: Component, auth, ...rest }) => {
  return (
    <Route {...rest} render={props => auth
      ? <Component auth={auth} {...props} />
      : <Redirect to={{pathname:'/'}} />
    }
    />
  )
};

export const PublicRoute = ({component: Component, restricted, auth, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            auth && restricted ? <Redirect to='/menu' /> : <Component {...props} />
        )} />
    );
};
