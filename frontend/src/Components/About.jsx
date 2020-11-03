import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    console.log("button clicked");
  }
  return (
    <div className="main">
      <main>
      <div className="navigation-Bar">
        <nav className="navbar navbar-light bg-light" style={{ opacity: ".9" }}>
          <button onClick={topFunction} style={{ border: "none" }}>
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
        style={{
          backgroundColor: "#F29900",
          color: "white",
          marginBottom: "0px",
          height:'400px'
        }}
      >
        <div className="container" styl={{ marginBotttom: "0px" }}>
          <h1
            className="display-3 text-center"
            style={{ fontFamily: "Baskervville", fontSize: "100px" }}
          >
            Vida Veloz
          </h1>
          <h4
            className="display-5 font-weight-light text-center"
            style={{ fontFamily: "Baskervville" }}
          >
            <em>About us</em>
          </h4>
        </div>
      </div>

      {/* <section className="mission-Statement"> */}
      <div
        className="jumbotron jumbotron-fluid text-center"
        style={{ backgroundColor: "white", marginBottom: "0px" }}
      >
        <div class="container">
          <h1
            class="display-4"
            style={{ fontFamily: "Baskervville", color: "#F29900" }}
          >
            Our Mission
          </h1>
          <p class="lead" style={{ fontFamily: "Playfair display" }}>
            is to provide the consumer the best curated alternative online and
            offline shopping experience. Integrating technology, luxury customer
            service, and sustainable practices to satisfy customer expectations.
            VidaVeloz will be an innovative and transformative solution to fill
            the gaps in the luxury fashion industry. Through our revolutionary
            app, VidaVeloz can deliver nearly anything from your favorite
            local boutique or retailer to you within hours. Fashion at your door
            today.{" "}
          </p>
        </div>
      </div>
      {/* </section> */}

      {/* <section className="meet-Team-Title"> */}
      <div
        class="jumbotron jumbotron-fluid "
        style={{
          color: "#C44B3C",
          backgroundColor: "white",
          textAlign: "center",
          marginBottom: "0px",
        }}
      >
        <div class="container">
          <h1 class="display-4" style={{ fontFamily: "Baskervville" }}>
            Meet the Women behind Vida Veloz
          </h1>
        </div>
      </div>
      {/* </section> */}

      {/* Where carousel code begins */}
      {/* <section>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="isa.jpg"
                alt="First slide contains photo of Isabella Montoya."
                // style={{height:'800px'}}
              />
              <div class="carousel-caption ">
                <h5> Isabella Montoya Paz</h5>
                <p>
                  {" "}
                  Peruvian born with a Texan heart and a fashion connoisseur.
                  Over a decade of experience in the fashion luxury industry.
                  Background studies include fashion design, international
                  trade, marketing, and economics.
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="Kathy-Puma.jpg"
                alt="Second slide contains Photo of Kathy."
                // style={{height:'800px'}}
              />

              <div class="carousel-caption ">
                <h5>Kathy Puma</h5>
                <p>
                  {" "}
                  Born and raised in Brooklyn, NY. Backround in finance and accouting. Speaks five languages and
                  loves to code.{" "}
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="Giselle-Sanchez.jpg"
                alt="Third slide contains Photo of Giselle."
                // style={{height:'200px'}}
              />
              <div class="carousel-caption">
                <h5>Giselle Sanchez </h5>
                <p>
                  {" "}
                  Background in International Business from Baruch College Zicklin School of Business. Passionate about the interdependence of people across the world through technology.{" "}
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="Briany-Taveras.jpg"
                alt="Third slide contains Photo of Briany."
                // style={{height:'200px'}}
              />
              <div class="carousel-caption ">
                <h5>Briany Taveras </h5>
                <p>
                  {" "}
                  Background in Psychology from the City College of New York. {" "}
                </p>
              </div>
            </div>

            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="Aransa-Garcia.jpg"
                alt="Third slide contains photo of Aransa."
                // style={{height:'200px'}}
              />
              <div class="carousel-caption ">
                <h5>Aransa Garcia</h5>
                <p>
                  {" "}
                  Backround in Psychology and English.{" "}
                </p>
              </div>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section> */}

<section>
      <div className="container mb-5 ">
        <div className="row align-items-center ">
          <div className="col-log-5 text-center my-auto mx-auto py-auto">
            <img src="isa.jpg" height="100%" style={{ borderRadius: "50%"}} alt=" Isabella Montoya." />
          </div>

          <div className="col-lg-7 text-center my-5 mx-auto px-auto pb-6">
            <p className="h3 lead font-weight-bold">
              {" "}
              Isabella Montoya Paz
              <br />
            </p>
            <p className="font-italic">
              {" "}
              Peruvian born with a Texan heart and a fashion connoisseur. Over a
              decade of experience in the fashion luxury industry. Background
              studies include fashion design, international trade, marketing,
              and economics.
            </p>
          </div>
        </div>
</div>
</section>
<section>
      <div className="container mb-5 ">
        <div className="row my-20px">
       <div className="col-log-5 order-lg-2 text-center my-auto mx-auto">
            <img src="Kathy-Puma.jpg" height="250px" style={{ borderRadius: "50%" }}  alt="Kathy Puma." />
          </div>    
          <div className="col-lg-7 text-center order-lg-1 my-5 mx-auto px-auto pb-6">
            <p className="h3 lead font-weight-bold">
              {" "}
              Kathy Puma
              <br />
            </p>
            <p className="font-italic">
              {" "}
              Born and raised in Brooklyn, NY. Background in finance and accounting. Speaks five languages and
              loves to code.
            </p>
          </div>
       
        </div>
</div>
</section>
<section>
      <div className="container mb-5 ">
        <div className="row">
          <div className="col-log-5 text-center my-auto mx-auto">
            <img src="Giselle-Sanchez.jpg" height="250px" style={{ borderRadius: "50%" }} alt="Giselle Sanchez." />
          </div>

          <div className="col-lg-7 text-center my-5 mx-auto px-auto pb-6">
            <p className="h3 lead font-weight-bold">
              {" "}
              Giselle Sanchez
              <br />
            </p>
            <p className="font-italic">
              {" "}
              Background in International Business from Baruch College Zicklin School of Business. Passionate about the interdependence of people across the world through technology.
            </p>
          </div>
        </div>
        </div>
        </section>

        <section>
      <div className="container mb-5 ">
        <div className="row">
        <div className="col-log-5 order-lg-2 text-center my-auto mx-auto">
            <img src="Briany-Taveras.jpg" height="250px" style={{ borderRadius: "50%" }} alt="Briany Taveras" />
          </div>
           <div className="col-lg-7 order-lg-1 text-center my-5 mx-auto px-auto pb-6">
            <p className="h3 lead font-weight-bold">
              {" "}
              Briany Taveras
              <br />
            </p>
            <p className="font-italic">
              {" "}
              Background in Psychology and International Studies. Loves to travel, etc, etc. 
            </p>
          </div>
       
        </div>
        </div>
        </section>

        <section>
      <div className="container mb-5 ">
        <div className="row">
          <div className="col-log-5 text-center my-auto mx-auto">
            <img src="Aransa-Garcia.jpg" height="250px" style={{ borderRadius: "50%" }} alt="Aransa Garcia" />
          </div>

          <div className="col-lg-7 text-center my-5 mx-auto px-auto pb-6">
            <p className="h3 lead font-weight-bold">
              {" "}
             Aransa Garcia
              <br />
            </p>
            <p className="font-italic">
              {" "}
            Background in Psychology and English from the City College of New York. Passionate about etc ... 
            </p>
          </div>
        </div>
        </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default About;
