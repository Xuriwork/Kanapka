import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreateOrder from './components/CreateOrder/CreateOrder';
import SignUpContainer from './components/Forms/SignUpContainer';
import SignInContainer from './components/Forms/SignInContainer';

import useOrders from './hooks/useOrder';
import { FoodBagProvider } from './state/BagState';
import UserContext, { useAuth } from './state/UserContext';

import './App.scss';

const App = () => {
  const orders = useOrders();
  const { initializing, user } = useAuth();

  if (initializing) {
    return <div>Loading</div>
  };

  return (
    <UserContext.Provider value={{ user }}>
      <FoodBagProvider>
        <Router>
          <Navbar {...orders} />
          <div className='app'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/menu' render={(props) => <CreateOrder {...props} {...orders} />} />
              <Route exact path='/sign-up' component={SignUpContainer} />
              <Route exact path='/sign-in' component={SignInContainer} />
            </Switch>
          </div>
        </Router>
      </FoodBagProvider>
    </UserContext.Provider>
  );
}

export default App;
