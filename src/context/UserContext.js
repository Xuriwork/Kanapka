import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router';
import firebase from '../utils/Firebase';

const UserContext = React.createContext({
  user: null,
});

export const useAuth = () => {
    const [state, setState] = useState(() => {
        const user = firebase.auth().currentUser;

        return {
            userIsLoading: !user,
            user,
        };
    });

    const onChange = (user) => {
        setState({ userIsLoading: false, user })
    };

    useEffect(() => {
        const unsubscirbe = firebase.auth().onAuthStateChanged(onChange);

        return () => unsubscirbe();
    }, [])

    return state;
};

export const PrivateRoute = ({component: Component, auth }) => (
  <Route render={props => auth === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{pathname:'/'}} />
  }
  />
);

export default UserContext;