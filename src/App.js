import React, { } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Contact from './Components/Contact';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
      <footer className="text-white bg-dark my-auto py-2 px-5">
        <div className="d-flex bd-highlight mb-3">
          <Link to="/about" className="mr-3 no-decoration text-light p-2 bd-highlight">About Us</Link>
          <Link to="/contact" className="mr-3 no-decoration text-light p-2 bd-highlight">Contact Us</Link>
          <p className="ml-auto p-2 bd-highlight">
            Follow Us:
          <a href="#" target="_blank" rel="noopener noreferrer"> {" "}
              <AiOutlineInstagram style={{ "color": "white" }} size={20}/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"> {" "}
              <AiOutlineLinkedin style={{ "color": "white" }} size={20}/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"> {" "}
              <AiOutlineTwitter style={{ "color": "white" }} size={20}/>
            </a>
            <br/>
            © Vida Veloz LLC 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
