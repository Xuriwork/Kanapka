import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreateOrder from './components/CreateOrder/CreateOrder';
import SignUpContainer from './components/Forms/SignUpContainer';
import SignInContainer from './components/Forms/SignInContainer';
import Loading from './utils/Loading';
import history from './utils/history';

import useOrders from './hooks/useOrder';
import { FoodBagProvider } from './context/BagContext';
import UserContext, { useAuth, PrivateRoute } from './context/UserContext';

import './App.scss';

const App = () => {
  const orders = useOrders();
  const { userIsLoading, user } = useAuth();

  if (userIsLoading) {
    return <Loading />
  };

  return (
    <UserContext.Provider value={{ user }}>
      <FoodBagProvider>
        <Router history={history}>
          <Navbar {...orders} />
          <div className='app'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/menu' render={(props) => <CreateOrder {...props} {...orders} />} />
              <Route exact path='/sign-up' component={SignUpContainer} />
              <Route exact path='/sign-in' component={SignInContainer} />
              <PrivateRoute path='/orders' auth={user} component />  
            </Switch>
          </div>
        </Router>
      </FoodBagProvider>
    </UserContext.Provider>
  );
};

//<Route path='*' exact={true} component={NotFound} />

export default App;
