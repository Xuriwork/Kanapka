import React, { useState, useEffect } from 'react';
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
    setState({ userIsLoading: false, user });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    
    return () => unsubscribe;
  }, []);

  return state;
};

export default UserContext;
