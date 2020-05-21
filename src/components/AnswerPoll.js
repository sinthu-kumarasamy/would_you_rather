import React, { Component } from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { Image, Button, Card, Checkbox,Message,Progress,Label} from "semantic-ui-react";
import { handleAddAnswer } from "../actions/questions";
import LoadingBar from 'react-redux-loading-bar';
import {handleUpdateUserData} from '../actions/users'


class AnswerPoll extends Component {
  state = {
    selectedValue: "",
    enableBtn:true
  };
  handleChange = (e,{value}) => {
    this.setState({selectedValue : value,enableBtn:false})
  }

  handleButtonClick = (e) =>{
    e.preventDefault()
    const {dispatch,authUser,question_id} = this.props
    const {selectedValue} = this.state
    if(selectedValue!==null){
      dispatch(handleAddAnswer({authUser,answer:selectedValue,question_id}))
      dispatch(handleUpdateUserData())
    }
    
  }
  render() {
    const { isAnswered, question, author,authUser} = this.props;
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
    const votesforOptionOne = question.optionOne.votes.length
    const votesforOptionTwo = question.optionTwo.votes.length
    const optionOne = question.optionOne.votes.filter((name)=> name === authUser)
    const optionTwo = question.optionTwo.votes.filter((name)=> name === authUser)
    const optionOneAnswer = optionOne.length !== 0 ? true: false
    const optionTwoAnswer = optionTwo.length !== 0 ? true: false
    
    
    return (
      <div>
        <NavBar />
        <LoadingBar style={{ backgroundColor: '#780743', height: '5px' }}/>
        {isAnswered === false ? (
          <Card className="userCard" style={{marginLeft:'600px',fontSize:'20px'}}>
            <Card.Content>
              <Image
                floated="left"
                size="tiny"
                circular
                src={author.avatarURL}
              />
              <Card.Header>{author.name}</Card.Header>
              <Card.Meta>Would You Rather</Card.Meta>
              <Card.Description>
                <Checkbox
                  radio
                  label={question.optionOne.text}
                  name="checkboxRadioGroup"
                  value="optionOne"
                  checked={this.state.selectedValue === 'optionOne'}
                  onChange={this.handleChange}
                  style={{fontSize:'18px',fontWeight:'bold'}}
                /><br/>
                <Checkbox
                  radio
                  label={question.optionTwo.text}
                  name="checkboxRadioGroup"
                  value="optionTwo"
                  checked={this.state.selectedValue === 'optionTwo'}
                  onChange={this.handleChange}
                  style={{fontSize:'18px',fontWeight:'bold'}}
                />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  basic
                  color="green"
                  disabled={this.state.enableBtn}
                  onClick={this.handleButtonClick}
                >
                  Submit
                </Button>
              </div>
            </Card.Content>
          </Card>
        ) : (
          <Card className="userCard" style={{marginLeft:'600px'}}>
            <Card.Content>
              <Image
                floated="left"
                size="tiny"
                circular
                src={author.avatarURL}
              />
              <Card.Header>{author.name}</Card.Header>
              <Card.Description>
                  <h2 style={{color:'black',textAlign:'center',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>Results</h2>
              <Message style={{backgroundColor:optionOneAnswer===true ? '#FAEBD7':'#F8F8F8'}}>
              {optionOneAnswer && <Label color='red' ribbon='right'>Your Vote</Label>}
                <Message.Header style={{marginBottom:'15px'}}>{question.optionOne.text}</Message.Header>
                <Progress value={votesforOptionOne} total={totalVotes} color='teal' size='medium'/>
                <Message.Header style={{color:'black',textAlign:'center',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>{votesforOptionOne} out of {totalVotes} votes</Message.Header>
            </Message>
            <Message style={{backgroundColor:optionTwoAnswer===true ? '#FAEBD7':'#F8F8F8'}}>
              {optionTwoAnswer && <Label color='red' ribbon='right'>Your Vote</Label> }
                <Message.Header  style={{marginBottom:'15px'}}> {question.optionTwo.text}</Message.Header>
                <Progress value={votesforOptionTwo} total={totalVotes} color='teal'size='medium'  />
                <Message.Header style={{color:'black',textAlign:'center',fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}}>{votesforOptionTwo} out of {totalVotes} votes</Message.Header>
            </Message>
                
              </Card.Description>
            </Card.Content>
          </Card>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authUser }, { match }) {
  const question_id = match.params.id;
  const question = questions[question_id];
  const author = users[question.author];
  let isAnswered = false;
  if (
    question.optionOne.votes.includes(authUser) ||
    question.optionTwo.votes.includes(authUser)
  ) {
    isAnswered = true;
  }
  return {
    question,
    isAnswered,
    author,
    authUser,
    question_id
  };
}

export default connect(mapStateToProps)(AnswerPoll);
