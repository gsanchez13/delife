import React, { useState } from 'react';

const Landing = () => {
    let [email, setEmail] = useState("");
    const changeEmail = (e) => {
        setEmail(e.target.value);
    };
    const checkValid = (e) => {
        e.preventDefault();
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            console.log("valid email")
        }
        else{
        console.log("invalid email")
        }
    };
    return (
        <div>
            <main role="main">
                <div className="jumbotron text-light mb-0" style={{ "backgroundColor": "#F29900" }}>
                    <div className="container">
                        <div className="text-center mx-auto">
                            <h1 className="display-3" style={{ "display": "inline" }}>V</h1>
                            <p className="display-4" style={{ "display": "inline" }}>ida</p>
                            <h1 className="display-3" style={{ "display": "inline" }}>V</h1>
                            <p className="display-4" style={{ "display": "inline" }}>eloz</p>
                        </div>
                        <h4 className="display-5 font-weight-light text-center"><em>Delivering life's luxuries, today.</em></h4>
                    </div>
                </div>
                <div className="row mx-auto my-auto">
                    <div className="col-lg-3 my-3 mx-auto text-center py-2">
                        <img alt="shopping bags" src="/bags.svg" style={{ "height": "150px" }} />
                        <p className="mt-3">Shop With Us</p>
                    </div>
                    <div className="col-lg-3 my-3 mx-auto text-center py-2">
                        <img alt="bike" src="/bike.svg" style={{ "height": "150px" }} />
                        <p className="mt-3">Deliver Luxuries</p>
                    </div>
                    <div className="col-lg-3 my-3 mx-auto text-center py-2">
                        <img alt="storefront" src="/store.svg" style={{ "height": "150px" }} />
                        <p className="mt-3">Partner With Us</p>
                    </div>
                    <div className="col-lg-6 py-3 px-5 pl-3 text-center" style={{ "backgroundColor": "#C44B3C" }}>
                        <h1 className="display-4 text-light">About <br />
                            <em>
                                <h1 className="display-3" style={{ "display": "inline" }}>V</h1>
                                <p className="display-4" style={{ "display": "inline" }}>ida</p>
                                <h1 className="display-3" style={{ "display": "inline" }}>V</h1>
                                <p className="display-4" style={{ "display": "inline" }}>eloz</p>
                            </em>
                        </h1>
                    </div>
                    <div className="col-lg-6 py-3 px-5 pl-3 text-center" style={{ "backgroundColor": "#EFDDD0" }}>
                        <em>Vida Veloz </em>helps you find and order clothes, beauty products, and everyday essentials near you. <br />
                        How it works: You share your location or type in your zipcode, we tell you the stores near you that deliver to your address. When you find what you're looking for, you can place your order online and we’ll make sure you receive your order by the end of the day.
                    </div>
                    <div className="col-lg-6 my-5 py-5 mx-auto">
                        <form onSubmit={checkValid} className="text-center">
                            <input
                                type="text mx-auto"
                                style={{
                                    "background": "transparent",
                                    "border": "none",
                                    "borderBottom": "1px solid #000000",
                                    "WebkitBoxShadow": "none",
                                    "boxShadow": "none",
                                    "borderRadius": "0",
                                    "width": "70%",
                                    "display": "inline"
                                }}
                                value={email}
                                onChange={changeEmail}
                                placeholder="My email address" />
                            <button
                                type="submit"
                                className="btn text-light ml-3"
                                style={{
                                    "backgroundColor": "#F29900",
                                    "display": "inline"
                                }}
                                onSubmit={checkValid}>
                                Submit</button>
                        </form>
                    </div>
                </div>
            </main>
        </div >
    )
};

export default Landing;