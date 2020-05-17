import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { handleInitialData } from "../actions/shared";
import { Card } from "react-bootstrap";
import LoadingBar from 'react-redux-loading-bar';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
     const{userIds} = this.props

    return (
        <div className="App">
        {userIds.length === 0 ? <LoadingBar style={{ backgroundColor: '#780743', height: '5px' }}/>:(
        <Card>
          <Card.Header>Would You Rather?</Card.Header>
          <Card.Img src="../images/logo.svg" className="App-logo"/>
          <Card.Body>
            <Card.Title>Sign in</Card.Title>
            <form>
              <select className="dropdown">
                {this.props.userIds.map((id) => {
                  return <option key={id} value={id}>{id}</option>;
                })}
              </select><br/>
              <button className="submitBtn">Sign in</button>
            </form>
          </Card.Body>
        </Card>
      )}
      </div>
        
    )
  }
}

function mapStateToProps({ users }) {
  return { userIds: Object.keys(users) };
}

export default connect(mapStateToProps)(App);
