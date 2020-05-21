import React, { Component } from "react";
import NavBar from "./NavBar";
import { Card, Button, Form,Divider } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/questions";
import {connect} from 'react-redux'
import {handleUpdateUserData} from '../actions/users'

class NewQuestion extends Component {
    state = {
        optionOne : '',
        optionTwo : '',
        enableBtn:true
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const {optionOne,optionTwo} = this.state
        const {dispatch,history,authUser} = this.props
        if(optionOne!=='' && optionTwo!==''){
           dispatch(handleAddQuestion({
                optionOne,
                optionTwo,
                authUser
            }))
            dispatch(handleUpdateUserData())
        }
        history.push('/')
    }

    handleInputOne = (e) =>{
        e.preventDefault()
        this.setState({optionOne : e.target.value})
    }

    handleInputTwo = (e) =>{
        e.preventDefault()
        this.setState({optionTwo : e.target.value, enableBtn:false})
    }
  render() {
    return (
      <div>
        <NavBar />
        <Card style={{marginLeft:'600px',marginTop:'100px',fontSize:'20px',width:'600px'}}>
          <Card.Content>
            <Card.Header style={{textAlign:'center'}}>Create Question</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Header>Would You Rather</Card.Header>
            <Card.Description style={{padding:'3px'}}>
              <Form >
                <Form.Field>
                  <input name='optionOne' placeholder="Enter Option One" onChange={this.handleInputOne}/>
                </Form.Field>
                <Divider horizontal>Or</Divider>
                <Form.Field>
                  <input  name='optionTwo' placeholder="Enter Option Two" onChange={this.handleInputTwo}/>
                </Form.Field>
                <div className="ui two buttons">
                  <Button
                    type="submit"
                    basic
                    color="blue"
                    disabled={this.state.enableBtn}
                    onClick = {this.handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Description>
            </Card.Content>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({authUser}){
    return{
        authUser
    }
}

export default connect(mapStateToProps)(NewQuestion);
