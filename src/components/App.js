import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home'
import Login from './Login'
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
 
  render() {
    return (
      <Router>   
            {this.props.loading === true ? <Route path='/' exact component={Login}/> : (
             <Route path="/" component={Home}/>
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
