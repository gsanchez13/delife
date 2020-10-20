import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {
    // let [email, setEmail] = useState("");
    return (
        <div>
            <main role="main">
                <div className="jumbotron text-light mb-0" style={{ "backgroundColor": "#F29900" }}>
                    <div className="container">
                        <h1 className="display-3 text-center">Vida Veloz</h1>
                        <h4 className="display-5 font-weight-light text-center"><em>Delivering life's luxuries, today.</em></h4>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="col-lg-6 py-5 px-5 pl-3 text-center" style={{ "backgroundColor": "#C44B3C" }}>
                        <h1 className="display-4 text-light">About <br/><em>Vida Veloz</em></h1>
                    </div>
                    <div className="col-lg-6 py-5 px-5 pl-3" style={{ "backgroundColor": "#EFDDD0" }}>
                        <em>Vida Veloz </em>helps you find and order clothes, beauty products, and everyday essentials near you. <br />
                        How it works: You share your location or type in your zipcode, we tell you the stores near you that deliver to your address. When you find what you're looking for, you can place your order online and we’ll make sure you receive your order by the end of the day.
                    </div>
                </div>
                <div className="container mx-auto my-auto">
                    <div className="row mx-auto my-auto">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://img.icons8.com/dusk/100/000000/shopping-bag.png" className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Shop with us</h5>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        {/* <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-6 text-center my-5 mx-auto px-auto pb-6">
                            <p className="h3 lead font-weight-bold">Order fashion favorites from stores near you.<br /></p>
                            <p className="font-italic">Experience online shopping at your door.</p>
                        </div>
                        <div className="col-log-4 text-center my-auto mx-auto">
                            <img src="/shoppingbags.png" height="100px" />
                        </div>
                    </div>
                    <div className="row mx-auto text-center">
                        <div className="col-lg-7 text-left" style={{ "backgroundColor": "grey" }}>
                            <p className="card-header">Shop with Us</p>
                            <img style={{ "backgroundColor": "white" }} src="https://img.icons8.com/dusk/100/000000/shopping-bag.png" className="img-fluid rounded-circle px-auto py-auto" alt="..." />
                        </div>
                        <br />
                        <div className="col-lg-7 text-right" style={{ "backgroundColor": "grey" }}>
                            <p className="card-header">Become a Partner</p>
                            <img style={{ "backgroundColor": "white" }} src="https://img.icons8.com/officel/100/000000/scooter.png" className="img-fluid rounded-circle px-auto py-auto" alt="..." />
                        </div>
                        <div className="col-lg-7 text-left" style={{ "backgroundColor": "grey" }}>
                            <p className="card-header">Become a Partner</p>
                            <img style={{ "backgroundColor": "white" }} src="https://img.icons8.com/clouds/100/000000/online-shop-shopping-bag.png" className="img-fluid rounded-circle px-auto py-auto" alt="..." />
                        </div>
                        <div className="col-lg-4 input-group mx-auto my-3">
                            <input type="text" className="form-control" placeholder="Email" aria-describedby="basic-addon2">
                            </input>
                        </div>
                    </div>
                </div> */}
            </main>
                </div >
                )
            };
            
export default Landing;