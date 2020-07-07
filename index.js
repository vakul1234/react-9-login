import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Component/home';
import Admin from './Component/admin';
import Login from './Pages/login';
import Signup from './Pages/signup';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//my authentication
import AuthContext from './context/auth';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App(props) {
  return (
     <AuthContext.Provider value={false}>
      <Router>
        <div>
          <ul>
            ...
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
     </AuthContext.Provider>
  );
}
export default App;

render(<App />, document.getElementById('root'));
