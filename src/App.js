import React, { } from 'react';
import { Button } from './styling/styles';
import { Switch, Route, Link } from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
      <footer className="container">
      <ul className="">
          <li className="nav-item">
            <Link to="/about" className="active mr-3">About Us</Link>
            <Link to="/contact" className="active mr-3">Contact Us</Link>
          </li>
          <li className="nav-item ml-3">
          </li>
        </ul>
        © VeloxVida LLC 2020
      </footer>
    </div>
  );
}

export default App;
