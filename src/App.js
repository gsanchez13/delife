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
      <footer className="text-white bg-dark mt-auto py-3 px-3">
        <div className="container">
          <Link to="/about" className="active mr-3">About Us</Link>
          <Link to="/contact" className="active mr-3">Contact Us</Link>
          <p className="text-left">© Vida Veloz LLC 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
