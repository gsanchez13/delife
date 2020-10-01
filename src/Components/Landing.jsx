import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <main role="main">
                <div className="jumbotron" style={{"backgroundColor": "#F29900", "color": "white"}}>
                    <div className="container">
                        <h1 className="display-3 mx-auto">Welcome to Vida Veloz. </h1>
                        <h4 className="display-5 font-weight-light"> Shop and you shall recieve. </h4>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-4 mt-3">
                            <h3>Customer Signup</h3>
                            <p className="font-weight-light">
                                The customer platform will have store pages filled with inventory where you can browse and shop based on store locations near you. Favorites and categories and an explore page will allow you to see all the small shops you never knew you needed. Selected tiers for delivery speed will be available ranging from 3 hour to end-of-day. Sign up here to recieve a notification once VeloxVita 1.0 launches.
                            </p>
                            <Link className="btn btn-secondary" to="/auth" role="button">Customer Signup</Link>
                        </div>
                        <br />
                        <div className="col-lg-4 mt-3">
                            <h3>Courier Signup</h3>
                            <p className="font-weight-light">
                                The courier platform will use geolocation to obtain your current location and suggest jobs that are nearby, notify you when your order is ready for pickup, and update you on information for that given order. Connected to a payment system that deposits your earnings directly into your bank account, it is a seamless, quick way to make daily earnings. Sign up now to apply to become a courier once VeloxVita 1.0 launches in a metro-area near you.
                            </p>
                            <Link className="btn btn-secondary" to="/auth">Courier Signup</Link>
                        </div>
                        <div className="col-lg-4 mt-3">
                            <h3>Store Signup</h3>
                            <p className="font-weight-light">
                                The store platform will consist of an online marketplace for small businesses to connect to. You will recieve notifications of orders placed, as well as time estimated for courier pickup and successful delivery notification. into addition, the live inventory will help you keep track of what needs to be replenished and an steady overview of your business's sales. Sign up now to become a partner once VeloxVita 1.0 launches.
                            </p>
                            <Link className="btn btn-secondary" to="/auth">Store Signup</Link>
                        </div>
                    </div>
                    <hr />
                </div>
            </main>
        </div>
    )
};

export default Landing;