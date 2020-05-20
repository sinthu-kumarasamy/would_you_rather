import React, { Component } from "react";
import { Menu, Segment, Image, Button,Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import "./App.css";
import { setAuthedUser } from "../actions/authUser";
import {NavLink,withRouter} from 'react-router-dom'

class NavBar extends Component {
  handleLogout =(e)=> {
      e.preventDefault()
      this.props.dispatch(setAuthedUser(null))
      this.props.history.push("/")  
  }
  render() {
    const { authUser, users } = this.props;
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item  as={NavLink} exact to='/' name="home" />
          <Menu.Item  as={NavLink} to='/add' name="new question" />
          <Menu.Item as={NavLink} to='/leaderboard' name="leaderboard" />
          <Menu.Menu position="right">
            <Menu.Item>
              <span>
                <Image
                  src={users[authUser].avatarURL}
                  avatar
                  spaced="right"
                  verticalAlign="middle"
                />
                Hello,{users[authUser].name}
              </span>
            </Menu.Item>
            <Menu.Item>
              <Button animated="vertical" style={{backgroundColor: 'white',fontSize:'15px'}} onClick={this.handleLogout}>
                <Button.Content hidden>Logout</Button.Content>
                <Button.Content visible>
                  <Icon name="sign-out" />
                </Button.Content>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

function mapStateToProps({ authUser, users }) {
  return {
    authUser,
    users,
  };
}

export default withRouter(connect(mapStateToProps)(NavBar));
