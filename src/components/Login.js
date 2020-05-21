import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Card } from "react-bootstrap";
import LoadingBar from 'react-redux-loading-bar';
import { setAuthedUser } from "../actions/authUser";
import { Redirect } from "react-router-dom";


class Login extends Component {
  state = {
    selectedUser : '',
  }
  handleSubmit = (e) =>{
      e.preventDefault()
      this.props.dispatch((setAuthedUser(this.state.selectedUser)))
  }
  handleChange = (e) =>{
    this.setState({selectedUser : e.target.value})
  }
  render() {
     const{userIds,authUser,users} = this.props
     if(authUser!==null){
       return <Redirect to='/home'/>
     }
     const userId = this.state.selectedUser!==''?this.state.selectedUser:'default'
    return (
        <div className="App">
        {userIds.length === 0 ? <LoadingBar style={{ backgroundColor: '#780743', height: '5px' }}/>:(
        <Card>
          <Card.Header>Would You Rather?</Card.Header>
          <Card.Img src="../images/logo.svg" className="App-logo"/>
          <Card.Body>
            <Card.Title>Sign in</Card.Title>
            <form onSubmit={this.handleSubmit}>
              <select className="dropdown" value={userId} onChange={this.handleChange}>
                <option value="default" disabled>Select User..</option>
                {this.props.userIds.map((id) => {
                  return <option key={id} value={id}>{users[id].name}</option>;
                })}
              </select><br/>
              <button className="submitBtn" disabled={this.state.selectedUser===''?true:false}>Sign in</button>
            </form>
          </Card.Body>
        </Card>
      )}
      </div> 
    )
  }
}

function mapStateToProps({ users,authUser }) {
  return { userIds: Object.keys(users),authUser,users };
}

export default connect(mapStateToProps)(Login);
