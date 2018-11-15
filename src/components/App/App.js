import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Result from '../Result'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
      <Route exact path='/' component={Home}></Route>  
      <Route exact path='/login' component={Login}></Route> 
      <Route exact path='/result' component={Result}></Route>
      </Switch> 
  </Router>
     
    );
  }
}

export default App;
