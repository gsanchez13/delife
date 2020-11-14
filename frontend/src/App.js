import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login'
import Signup from './Components/Signup'
import AuthProvider from './providers/AuthContext'
import { AuthRoute } from './util/routesUtil'

const App = () => {
  return (
    <div style={{ "fontFamily": 'Cormorant Garamond' }}>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Signup} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;