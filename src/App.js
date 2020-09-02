import React, { } from 'react';
import { Button } from './styling/styles';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active mr-3">
            <Route to="/about">About Us</Route>
          </li>
          <li className="nav-item ml-3">
            <Route to ="/contact">Contact Us</Route>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route to="/" Component={Landing}/>
      </Switch>
      <footer className="container">
        © Pursuit Carry LLC 2020
      </footer>
    </div>
  );
}

export default App;
