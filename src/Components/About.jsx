import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="main">
      <div class= 'Navigation-Bar'>
      <nav class="navbar navbar-light  bg-light" >
      {/* navbar navbar-expand navbar-light fixed-top bg-light */}
        <Link to = '/' class="navbar-brand" href="#">
          <img
            src="/OrangeIcon.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
        </Link>
      </nav>
      </div>

      <div
        className="jumbotron"
        style={{ backgroundColor: "#F29900", color: "white" }}
      >
        <div className="container">
          <h1
            className="display-3 text-center"
            style={{ fontFamily: "Baskervville", fontSize: "90px" }}
          >
            Vida Veloz
          </h1>
          <h4
            className="display-5 font-weight-light text-center"
            style={{ fontFamily: "Baskervville" }}
          >
            <em>Shop and you shall recieve.</em>
          </h4>
        </div>
      </div>

      <div className='Container-Mission'> 
      <div class="jumbotron jumbotron-fluid" style={{backgroundColor:'white'}}>
  <div class="container">
    <h1 class="display-4" style ={{fontFamily: "Baskervville", color:'#F29900'}}>Our Mission</h1>
    <p class="lead" style ={{fontFamily:'Playfair display'}}>is to provide the consumer the best curated alternative online and offline shopping experience. Integrating technology, luxury customer service, and sustainable practices to satisfy customer expectations. VidaVeloz will be an innovative and transformative solution to fill the gaps in the luxury fashion industry. Through our revolutionary app, VidaVeloz can deliver nearly anything from your favorite local boutique or retailer to you within hours. </p>
  </div>
</div>
      </div>





<section>
<div class="container">
 
    <div className='col-lg-6  my-5  px-auto '>
    <div class = '.col-6 .col-md-4 my-auto mx-auto' >
      <div class="card border-0 col-log-4 my-auto mx-auto" style={{width: '18rem'}}>
  <img class="img-fluid rounded-circle" style ={{borderRadius: '50%'}}src="isa.jpg" alt="Card with woman"/>
</div>
</div>
<div class='.col-12 .col-md-8 '>
    <h1> Isabella Montoya Paz</h1>
</div>
</div>

</div>
</section>
</div>
  );
};

export default About;
