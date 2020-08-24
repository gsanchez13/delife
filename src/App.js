import React, { } from 'react';
import './App.css';
import { Button } from './styling/styles';

const App = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark"></nav>
      <main role="main">
        <div className="jumbotron bg-warning">
          <div className="container-md">
            <h1 className="display-3 animated fadeInDown">Welcome to DeLife. </h1>
            <h3 className="display-5 font-weight-light"> Delivering life's luxuries, today. </h3>
          </div>
          <p className="font-weight-light ml-3">With a focus on same day delivery for boutique fashion, beauty and homegoods, we are a platform where customers, couriers and vendors can deliver life's luxeries when they are needed. No wait, no waste, more life.</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-3">
              <h3>Customer Signup</h3>
              <p className="font-weight-light">
                The customer platform will have store pages filled with inventory where you can browse and shop based on store locations near you. Selected tiers for delivery speed will be available ranging from 3 hour to end-of-day. Sign up here to recieve a notification once DeLife 1.0 launches.
              </p>
              <a className="btn btn-secondary" href="#" role="button">Customer Signup</a>
            </div>
            <br/>
            <div className="col-md-4 mt-3">
              <h3>Courier Signup</h3>
              <p className="font-weight-light">
              The courier platform will use geolocation to obtain your current location and suggest jobs that are nearby. Connected to a payment system that deposits your earnings directly into your bank account, it is a seamless, quick way to make daily earnings. Sign up now to apply to become a courier once DeLife 1.0 launches.
              </p>
              <a className="btn btn-secondary" href="#">Courier Signup</a>
            </div>
            <div className="col-md-4 mt-3">
              <h3>Store Signup</h3>
              <p className="font-weight-light">

              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
