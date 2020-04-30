import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreateOrder from './components/CreateOrder/CreateOrder';
import useOrders from './hooks/useOrder';

const App = () => {
  const orders = useOrders();

  return (
    <Router>
      <div className='app'>
        <Navbar {...orders} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/menu' render={(props) => <CreateOrder {...props} {...orders} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
