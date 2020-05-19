import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home'
import Login from './Login'
import { handleInitialData } from "../actions/shared";
import AnswerPoll from "./AnswerPoll";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
 
  render() {
    return (
      <Router>   
            {this.props.loading === true ? <Route path='/' exact component={Login}/> : (
             <div>
             <Route path="/" exact component={Home} />
             <Route path="/questions/:id" component={AnswerPoll} />
           </div>
            )}
      </Router>   
    )
  }
}

function mapStateToProps({ authUser}) {
  return {
    loading: authUser === null,
  };
}


export default connect(mapStateToProps)(App);
