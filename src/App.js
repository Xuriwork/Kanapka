import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreateOrder from './components/CreateOrder/CreateOrder';
import SignUpContainer from './components/AuthForms/SignUpContainer';
import SignInContainer from './components/AuthForms/SignInContainer';
import CheckoutContainer from './components/CheckoutForm/CheckoutContainer';
import OrdersContainer from './components/Orders/OrdersContainer';
import Loading from './utils/Loading';
import history from './utils/history';

import useOrders from './hooks/useOrder';
import UserContext, { useAuth, PrivateRoute } from './context/UserContext';
import { StateProvider } from './state/state';

import './App.scss';

const App = () => {
  const orders = useOrders();
  const { userIsLoading, user } = useAuth();

  if (userIsLoading) {
    return <Loading />
  };

  return (
    <UserContext.Provider value={{ user }}>
    <StateProvider>
        <Router history={history}>
          <Navbar {...orders} />
          <div className='app'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/menu' render={(props) => <CreateOrder {...props} {...orders} />} />
              <Route path='/sign-up' component={SignUpContainer} />
              <Route path='/sign-in' component={SignInContainer} />
              <PrivateRoute path='/checkout' auth={user} component={(props) => <CheckoutContainer {...orders} />} />
              <PrivateRoute path='/orders' auth={user} component={OrdersContainer} />  
            </Switch>
          </div>
        </Router>
      </StateProvider>
    </UserContext.Provider>
  );
};

//<Route path='*' exact={true} component={NotFound} />

export default App;
