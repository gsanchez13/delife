import React, { useState } from 'react';
import Footer from './Footer';
import axios from 'axios';
import { apiURL } from '../util/apiURL'

const Landing = () => {
    const API = apiURL()
    let [email, setEmail] = useState({
        emailStr: "",
        emailValid: null
    });
    const changeEmail = (e) => {
        setEmail({ ...email, emailStr: e.target.value });
    };
    const checkValid = async (e) => {
        e.preventDefault();
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.emailStr)) {
            setEmail({ ...email, emailValid: true });
            console.log(email.emailStr)
            let response = await axios.post(`${API}/api/subscribers`, {
                'email': email.emailStr
            });
            console.log(response)
        }
        else {
            setEmail({ ...email, emailValid: false })
        }
    };
    const alertType = () => {
        if(email.emailValid === null){
            return(
                <div></div>
            )
        }
        else if (email.emailValid) {
            return (
                <div className="alert alert-success mt-1">
                    Thanks for signing up! We'll send you an email once our 1.0 version is delivering!
            </div>
            )
        }
        else {
            return (
                <div className="alert alert-danger mt-1">
                    Invalid email input
            </div>
            )
        }
    }
    return (
        <div>
            <main role="main">
                <div className="jumbotron text-light mb-0" style={{ "backgroundColor": "#F29900"}}>
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
                    <div className="col-lg-3 my-4 mx-auto text-center py-2">
                        <img alt="shopping bags" src="/bags.svg" style={{ "height": "150px" }} />
                        <p className="mt-3">Shop With Us</p>
                    </div>
                    <div className="col-lg-3 my-4 mx-auto text-center py-2">
                        <img alt="bike" src="/bike.svg" style={{ "height": "150px" }} />
                        <p className="mt-3">Deliver Luxuries</p>
                    </div>
                    <div className="col-lg-3 my-4 mx-auto text-center py-2">
                        <img alt="storefront" src="/store.svg" style={{ "height": "150px" }} />
                        <p className="mt-3">Partner With Us</p>
                    </div>
                    <div className="col-lg-6 py-4 px-5 pl-3 text-center" style={{ "backgroundColor": "#C44B3C" }}>
                        <h1 className="display-4 text-light">About <br />
                            <em>
                                <h1 className="display-3" style={{ "display": "inline" }}>V</h1>
                                <p className="display-4" style={{ "display": "inline" }}>ida</p>
                                <h1 className="display-3" style={{ "display": "inline" }}>V</h1>
                                <p className="display-4" style={{ "display": "inline" }}>eloz</p>
                            </em>
                        </h1>
                    </div>
                    <div className="col-lg-6 py-5 px-auto pl-3" style={{ "backgroundColor": "#EFDDD0" }}>
                        <em>Vida Veloz </em>helps you find and order clothes, beauty products, and everyday essentials near you. <br />
                        How it works: You share your location or type in your zipcode, we tell you the stores near you that deliver to your address. When you find what you're looking for, you can place your order online and we’ll make sure you receive your order by the end of the day.
                    </div>
                    <div className="col-lg-12 mt-3 my-5 text-center">
                        <em>
                            <p className="display-4" style={{ "display": "inline", "color": "#F29900" }}>V</p>
                            <p className="display-4" style={{ "display": "inline", "color": "#F29900" }}>ida</p>
                            <p className="display-4" style={{ "display": "inline", "color": "#F29900" }}>V</p>
                            <p className="display-4" style={{ "display": "inline", "color": "#F29900" }}>eloz</p>
                            <img src="/OrangeIcon.png" alt="orange" className="ml-5 mr-3" style={{ "display": "inline", "height": "50px" }} />
                            <p className="display-4" style={{ "display": "inline" }}>Coming Soon</p>
                            <br />
                            <p className="display-5">Sign up to recieve updates about our app launch.</p>
                        </em>
                    </div>
                    <div className="col-lg-6 my-3 py-5 mx-auto">
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
                                value={email.emailStr}
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
                        {alertType()}
                    </div>
                </div>
            </main>
            <Footer/>
        </div >
    )
};

export default Landing;
