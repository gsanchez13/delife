import React, { } from 'react';
import './App.css';
import { Button } from './styling/styles';

const App = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark"></nav>
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3 animated fadeInDown">Welcome to DeLife. </h1>
            <h3 className="display-5 font-weight-light"> Delivering life's luxuries, today. </h3>
          </div>
          <p className="font-weight-light ml-3">With a focus on same day delivery for boutique fashion, beauty and homegoods, we are a platform where customers, couriers and vendors can deliver life's luxieres when they are needed. No wait, no waste, more life.</p>
        </div>
        <div className="container"></div>
      </main>
    </div>
  );
}

export default App;
