import React, { Component } from "react";
import { Image, Button, Card } from "semantic-ui-react";
import {connect} from "react-redux"
import { formatQuestion } from "../utils/_DATA";

class UserCard extends Component {
  render() {
      const {question,author} = this.props
    return (
         <Card className="userCard">
            <Card.Content>
            <Image
                floated="right"
                size='tiny' circular 
                src={author.avatarURL}
            />
            <Card.Header>{author.name}</Card.Header>
            <Card.Meta>Would You Rather</Card.Meta>
            <Card.Description>
                {question.optionOne.text} or {question.optionTwo.text} 
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <div className="ui two buttons">
                <Button basic color="green">
                View Poll
                </Button>
            </div>
            </Card.Content>
        </Card>
    )
  }
}

function mapStateToProps({ questions, authUser, users },{question}) {
  const author = users[question.author];
    return {
       question,
       author 
    }
  }

export default connect(mapStateToProps)(UserCard);
