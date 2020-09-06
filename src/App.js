import React, { } from 'react';
import { Button } from './styling/styles';
import { Switch, Route, Link } from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Contact from './Components/Conact';

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active mr-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item ml-3">
            <Route path="/contact" component={Contact}>Contact Us</Route>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Landing}/>
      </Switch>
      <footer className="container">
        © Pursuit Carry LLC 2020
      </footer>
    </div>
  );
}

export default App;
