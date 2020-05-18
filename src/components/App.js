import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route,Redirect} from "react-router-dom";
import Home from './Home'
import Login from './Login'

class App extends Component {
 
  render() {
    return (
      <Router>   
            {this.props.loading === true ? <Route path='/' exact component={Login}/> : (
             <Route path="/">
             <Redirect exact to="/home"/>
             <Route path="/home" component={Home}/>
           </Route> 
            )}
      </Router>   
    )
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null,
  };
}


export default connect(mapStateToProps)(App);
