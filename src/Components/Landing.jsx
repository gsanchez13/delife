import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {
    // let [email, setEmail] = useState("");
    return (
        <div>
            <main role="main">
                <div className="jumbotron text-light mb-0" style={{ "backgroundColor": "#F29900"}}>
                    <div className="container">
                        <h1 className="display-3 text-center">Vida Veloz</h1>
                        <h4 className="display-5 font-weight-light text-center"><em>Delivering life's luxuries, today.</em></h4>
                    </div>
                </div>
                <div className="row mx-auto my-auto">
                    <div className="col-lg-3 my-5 mx-auto text-center py-2">
                        <img src="/bags.svg" style={{ "height": "150px" }}/>
                        <p className="mt-3">Shop with us</p>
                    </div>
                    <div className="col-lg-3 my-auto mx-auto text-center">
                        <img src="/bike.svg" style={{ "height": "150px" }}/>
                        <p className="mt-3">Deliver Luxuries</p>
                    </div>
                    <div className="col-lg-3 my-auto mx-auto text-center">
                        <img src="/store.svg" style={{ "height": "150px" }}/>
                        <p className="mt-3">Partner with us</p>
                    </div>
                    <div className="col-lg-6 py-3 px-5 pl-3 text-center" style={{ "backgroundColor": "#C44B3C" }}>
                        <h1 className="display-4 text-light">About <br /><em>Vida Veloz</em></h1>
                    </div>
                    <div className="col-lg-6 py-3 px-5 pl-3 text-center" style={{ "backgroundColor": "#EFDDD0" }}>
                        <em>Vida Veloz </em>helps you find and order clothes, beauty products, and everyday essentials near you. <br />
                        How it works: You share your location or type in your zipcode, we tell you the stores near you that deliver to your address. When you find what you're looking for, you can place your order online and we’ll make sure you receive your order by the end of the day.
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Landing;