import React, { useState, useEffect } from 'react';
import firebase from '../utils/Firebase';

const UserContext = React.createContext({
  user: null,
});

export const useAuth = () => {
    const [state, setState] = useState(() => {
        const user = firebase.auth().currentUser;

        return {
            initializing: !user,
            user,
        };
    });

    const onChange = (user) => {
        setState({ initializing: false, user })
    };

    useEffect(() => {
        const unsubscirbe = firebase.auth().onAuthStateChanged(onChange);

        return () => unsubscirbe();
    }, [])

    return state;
}

export default UserContext;