import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreateOrder from './components/CreateOrder/CreateOrder';
import SignUpContainer from './components/AuthForms/SignUpContainer';
import SignInContainer from './components/AuthForms/SignInContainer';
import CheckoutContainer from './components/Checkout/CheckoutContainer';
import OrderHistoryContainer from './components/Orders/OrderHistoryContainer';
import OrderSuccess from './components/Checkout/OrderSuccess';

import Loading from './utils/Loading';
import history from './utils/history';

import useOrders from './hooks/useOrder';
import UserContext, { useAuth } from './context/UserContext';
import { PrivateRoute, OrderSuccessRoute, PublicRoute } from './components/Routes/Routes';
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
              <PublicRoute path='/sign-up' component={SignUpContainer} auth={!!user} restricted={true} />
              <PublicRoute path='/sign-in' component={SignInContainer} auth={!!user} restricted={true} />
              <PrivateRoute path='/checkout' component={(props) => <CheckoutContainer {...props} {...orders} />} auth={!!user} />
              <PrivateRoute path='/order-history' component={OrderHistoryContainer} auth={!!user} />  
              <OrderSuccessRoute path='/order-success' component={OrderSuccess} auth={!!user} />
            </Switch>
          </div>
        </Router>
      </StateProvider>
    </UserContext.Provider>
  );
};

//<Route path='*' exact={true} component={NotFound} />

export default App;
