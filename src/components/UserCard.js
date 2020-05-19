import React, { Component } from "react";
import { Image, Button, Card } from "semantic-ui-react";
import {connect} from "react-redux"
import {Link,withRouter} from 'react-router-dom'

class UserCard extends Component {
  
    handleButtonClick = (e,id) =>{
        e.preventDefault()
        this.props.history.push(`/questions/${id}`)   
    }

  render() {
    const {question,author,id} = this.props
     return (
        <Link to={`/questions/${id}`}>
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
                    <Button basic color="green" onClick={(e)=>this.handleButtonClick(e,question.id)}>
                    View Poll
                    </Button>
                </div>
                </Card.Content>
            </Card>
         </Link>
        )
    }
}

function mapStateToProps({ questions, users },{id}) {
  const question = questions[id]
  const author = users[question.author];
    return {
       question,
       author,
    }
  }

export default withRouter(connect(mapStateToProps)(UserCard));
