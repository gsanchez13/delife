import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <main role="main">
                <div className="jumbotron" style={{ "backgroundColor": "#F29900", "color": "white" }}>
                    <div className="container">
                        <h1 className="display-3 text-center">Vida Veloz</h1>
                        <h4 className="display-5 font-weight-light text-center"><em>Shop and you shall recieve.</em></h4>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-6 text-center my-5 mx-auto px-auto pb-6">
                            <p className="h3 lead font-weight-bold">Order fashion favorites from stores near you.<br/></p>
                            <p className="font-italic">Experience online shopping at your door.</p>
                        </div>
                        <div className="col-log-4 text-center my-auto mx-auto">
                            <img src="/shoppingbags.png" height="100px"/>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-4 text-center">
                        <img src="https://img.icons8.com/dusk/100/000000/shopping-bag.png"/><br/>
                            <Link className="btn btn-secondary" to="/auth" style={{"backgroundColor": "#F29900"}} >Sign up to Shop</Link>
                        </div>
                        <br />
                        <div className="col-lg-4 text-center">
                        <img src="https://img.icons8.com/officel/100/000000/scooter.png"/><br/>
                            <Link className="btn btn-secondary" to="/auth" style={{"backgroundColor": "#F29900"}}>Signup to be a Courier</Link>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img className="img-fluid rounded-circle" src="https://img.icons8.com/clouds/100/000000/online-shop-shopping-bag.png"/><br/>
                            <Link className="btn btn-secondary" to="/auth" style={{"backgroundColor": "#F29900"}}>Partner With Us</Link>
                        </div>
                    </div>
                </div>
            </main>
            <div className="row mx-auto text-light">
                    <div className="col-lg-5 py-5 px-5 pl-3 text-center" style={{"backgroundColor": "black"}}>
                        <h1 className="display-4"><em>About Vida Veloz</em></h1>
                    </div>
                    <div className="col-lg-7 py-5 px-5 pl-3 bg-dark ">
                    <em>Vida Veloz </em>helps you find and order clothes, beauty products, and everyday essentials near you. <br/>
                    How it works: You share your location or type in your zipcode, we tell you the stores near you that deliver to your address. When you find what you're looking for, you can place your order online and we’ll make sure you receive your order by the end of the day.
                    </div>
                </div>
        </div>
    )
};

export default Landing;