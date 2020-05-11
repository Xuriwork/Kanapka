import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Menu from './components/CreateOrder/Menu';
import SignUpContainer from './components/AuthForms/SignUpContainer';
import SignInContainer from './components/AuthForms/SignInContainer';
import CheckoutContainer from './components/Checkout/CheckoutContainer';
import OrderHistoryContainer from './components/OrderHistory/OrderHistoryContainer';
import OrderSuccessContainer from './components/Checkout/OrderSuccessContainer';
import NotFound from './components/NotFound';

import Loading from './components/Loading';
import history from 'utils/history';

import useOrders from './hooks/useOrders';
import UserContext, { useAuth } from './context/UserContext';
import { PrivateRoute, PublicRoute } from './utils/Routes';
import { StateProvider } from './state/state';

import 'App.scss';

axios.defaults.baseURL = 'https://us-central1-kanapka-xuri.cloudfunctions.net/api'

//http://localhost:5001/kanapka-xuri/us-central1/api/
//https://us-central1-kanapka-xuri.cloudfunctions.net/api

const App = () => {
  const orders = useOrders();
  const { userIsLoading, user } = useAuth();
  const auth = !!user;

  const value = React.useMemo(() => ({
    user
  }), [user]);

  if (userIsLoading) return <Loading />;

  return (
    <UserContext.Provider value={value}>
      <StateProvider>
        <Router history={history}>
          <Navbar {...orders} />
          <div className='app'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/menu' render={(props) => <Menu {...props} {...orders} />} />
              <PublicRoute path='/sign-up' component={SignUpContainer} auth={auth} restricted={true} />
              <PublicRoute path='/sign-in' component={SignInContainer} auth={auth} restricted={true} />
              <PrivateRoute path='/checkout' component={(props) => <CheckoutContainer {...props} {...orders} />} auth={auth} />
              <PrivateRoute path='/order-success' component={OrderSuccessContainer} auth={auth} />
              <PrivateRoute path='/order-history' component={OrderHistoryContainer} auth={auth} />  
              <Route path='*' exact component={NotFound} />
            </Switch>
          </div>
        </Router>
      </StateProvider>
    </UserContext.Provider>
  );
};

export default App;
