import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Menu from './components/CreateOrder/Menu';
import SignUpContainer from './components/AuthForms/SignUpContainer';
import SignInContainer from './components/AuthForms/SignInContainer';
import CheckoutContainer from './components/Checkout/CheckoutContainer';
import OrderHistoryContainer from './components/OrderHistory/OrderHistoryContainer';
import OrderSuccessContainer from './components/Checkout/OrderSuccessContainer';
import AboutUs from './components/AboutUs';
import ContactUsContainer from 'components/ContactUs/ContactUsContainer';
import NotFound from './components/Misc/NotFound';

import Loading from './components/Misc/Loading';
import history from 'utils/history';

import useOrders from './hooks/useOrders';
import UserContext, { useAuth } from './context/UserContext';
import { PrivateRoute, PublicRoute } from './utils/Routes';
import { StateProvider } from './state/state';

import 'App.scss';

axios.defaults.baseURL = 'https://us-central1-kanapka-xuri.cloudfunctions.net/api'

const App = () => {
  const orders = useOrders();
  const { userIsLoading, user } = useAuth();

  const value = React.useMemo(() => ({
    user
  }), [user]);

  if (userIsLoading) return <Loading />;

  return (
    <UserContext.Provider value={value}>
      <StateProvider>
        <Router history={history}>
          <Navbar {...orders} user={!!user} />
          <div className='app'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/menu' render={(props) => <Menu {...props} {...orders} />} />
              <Route path='/about-us' component={AboutUs} />
              <Route path='/contact-us' component={ContactUsContainer} />
              <PublicRoute path='/sign-up' component={SignUpContainer} auth={user} restricted={true} />
              <PublicRoute path='/sign-in' component={SignInContainer} auth={user} restricted={true} />
              <PrivateRoute path='/checkout' component={(props) => <CheckoutContainer {...props} {...orders} />} auth={user} />
              <PrivateRoute path='/order-success' component={OrderSuccessContainer} auth={user} />
              <PrivateRoute path='/order-history' component={OrderHistoryContainer} auth={user} />  
              <Route path='*' exact component={NotFound} />
            </Switch>
          </div>
        </Router>
      </StateProvider>
    </UserContext.Provider>
  );
};

export default App;
