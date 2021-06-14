import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyForm} from './MyForm';

import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Result from './Result';
import FnSubmit from './MyNewFile';


function App() {
  return (
    <div className="App">
      {/* <h1>
        <MyForm onSubmit={({email, firstName, lastName}) => {
          console.log(email, firstName, lastName);
        }} /> 
      </h1> */
      <Router>
        <div>
            <Link to="/">Form </Link>
            <Link to="/home">Home</Link><br></br>
      </div><br></br>
        
        <Switch>
          <Route exact path="/home" component={Result}/>
          <Route exact path="/form" component={FnSubmit}/>
          <Route exact path="/" component={FnSubmit}/>
        </Switch>
      </Router>
      
      }
    </div>
  );
}

export default App;
