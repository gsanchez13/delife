import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <main role="main" style={{"fontFamily": "cormorantGaramond"}}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer/>
    </main>
  );
}

export default App;
