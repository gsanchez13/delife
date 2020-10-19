import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        console.log('button clicked')
      }
  return (
    <div className="main">
      <div className= 'Navigation-Bar'>
      <nav className="navbar navbar-expand navbar-light fixed-top bg-light" 
      style ={{opacity:'.9'}} 
    //  navbar navbar-expand navbar-light fixed-top bg-light" 
      >
      {/* "navbar navbar-light  bg-light" */}
  
        <button onClick={topFunction} style={{border:'none'}}>
          <img
            src="/OrangeIcon.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt="An orange."
            onClick={topFunction} 
          />
          </button>
     
      </nav>
      </div>

      <div
        className="jumbotron"
        style={{ backgroundColor: "#F29900", color: "white", marginBottom:'0px' }}
      >
        <div className="container" styl={{marginBotttom:'0px'}}>
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

      
      <div className="jumbotron jumbotron-fluid text-center" style={{backgroundColor:'white'}}>
  <div class="container">
    <h1 class="display-4" style ={{fontFamily: "Baskervville", color:'#F29900'}}>Our Mission</h1>
    <p class="lead" style ={{fontFamily:'Playfair display'}}>is to provide the consumer the best curated alternative online and offline shopping experience. Integrating technology, luxury customer service, and sustainable practices to satisfy customer expectations. VidaVeloz will be an innovative and transformative solution to fill the gaps in the luxury fashion industry. Through our revolutionary app, VidaVeloz can deliver nearly anything from your favorite local boutique or retailer to you within hours. Fashion at your door today. </p>
  </div>

      </div>


      <div class="jumbotron jumbotron-fluid " style ={{color:'#C44B3C', backgroundColor:'white', textAlign:'center'}}>
  <div class="container">
    <h1 class="display-4" style ={{fontFamily:'Baskervville'}}>Meet the Women behind Vida Veloz</h1>
  </div>
</div>


{/* <section>
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
</section> */}





</div>
  );
};

export default About;
