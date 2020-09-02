import React from 'react';
import { Route } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <main role="main">
                <div className="jumbotron bg-warning">
                    <div className="container">
                        <h1 className="display-3">Welcome to DeLife. </h1>
                        <h4 className="display-5 font-weight-light"> Delivering life's luxuries, today. </h4>
                        <p className="font-weight-light">With a focus on same day delivery for boutique fashion, beauty and homegoods, we are a platform where customers, couriers and vendors can deliver life's luxeries when they are needed. No wait, no waste, more life.</p>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-4 mt-3">
                            <h3>Customer Signup</h3>
                            <p className="font-weight-light">
                                The customer platform will have store pages filled with inventory where you can browse and shop based on store locations near you. Favorites and categories and an explore page will allow you to see all the small shops you never knew you needed. Selected tiers for delivery speed will be available ranging from 3 hour to end-of-day. Sign up here to recieve a notification once DeLife 1.0 launches.
                            </p>
                            <Route className="btn btn-secondary" to="/auth" role="button">Customer Signup</Route>
                        </div>
                        <br />
                        <div className="col-md-4 mt-3">
                            <h3>Courier Signup</h3>
                            <p className="font-weight-light">
                                The courier platform will use geolocation to obtain your current location and suggest jobs that are nearby, notify you when your order is ready for pickup, and update you on information for that given order. Connected to a payment system that deposits your earnings directly into your bank account, it is a seamless, quick way to make daily earnings. Sign up now to apply to become a courier once DeLife 1.0 launches in a metro-area near you.
                            </p>
                            <Route className="btn btn-secondary" to="/auth">Courier Signup</Route>
                        </div>
                        <div className="col-md-4 mt-3">
                            <h3>Store Signup</h3>
                            <p className="font-weight-light">
                                The store platform will consist of an online marketplace for small businesses to connect to. You will recieve notifications of orders placed, as well as time estimated for courier pickup and successful delivery notification. into addition, the live inventory will help you keep track of what needs to be replenished and an steady overview of your business's sales. Sign up now to become a partner once DeLife 1.0 launches.
                            </p>
                            <Route className="btn btn-secondary" to="/auth">Store Signup</Route>
                        </div>
                    </div>
                    <hr />
                </div>
            </main>
        </div>
    )
};

export default Landing;