import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from './Home'
import Login from './Login'
import { handleInitialData } from "../actions/shared";
import AnswerPoll from "./AnswerPoll";
import NewQuestion from "./NewQuestion"
import Leaderboard from "./Leaderboard";
import PrivateRoute from './PrivateRoute'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
 
  render() {
    return (
      <Router>  
             <div>
             <Switch>
									<Route path="/" exact component={Login}/>
									<PrivateRoute path='/home' exact component={Home} />
									<PrivateRoute path='/add' exact component={NewQuestion} />
									<PrivateRoute path='/question/:id'exact component={AnswerPoll} />
									<PrivateRoute path='/leaderboard' component={Leaderboard} />
								</Switch>
           </div>
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
