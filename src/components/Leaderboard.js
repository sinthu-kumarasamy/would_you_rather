import React,{Component} from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import { Image,Label, Card } from "semantic-ui-react";
import './App.css'

class Leaderboard extends Component{
    render(){
        const{userData} = this.props
        return(
            <div>
            <NavBar />
            {userData.map((user)=>(
                 <Card className='leaderboard' key={user.name}>
                 <Card.Content>
                 <Image
                   fluid
                   label={{ as: 'a', corner: 'left', icon: 'trophy' }}
                 />
                   <Image
                     floated='left'
                     size='mini'
                     circular
                     src={user.avatarURL}
                   />
                   <Card.Header>{user.name}</Card.Header>
                   <Card.Description>
                    Answered Questions    :  <strong>{user.answeredQuestions}</strong><br/>
                    Created Questions   :  <strong>{user.questionsCreated}</strong>
                   </Card.Description>
                 </Card.Content>
                 <Card.Content extra>
                 Score : <Label circular color='teal'>
                 {user.score}
                 </Label>
                 </Card.Content>
               </Card>

            ))}
           
    </div>
        )
    }
}

function mapStateToProps({ users}) {
    const userData = Object.keys(users).map((user)=>{
        const user_data = {
            name : users[user].name,
            avatarURL : users[user].avatarURL,
            answeredQuestions : Object.keys(users[user].answers).length,
            questionsCreated : users[user].questions.length
        }
        const score = user_data.answeredQuestions + user_data.questionsCreated
        user_data.score = score
        return user_data
    }).sort((a,b)=>(b.score-a.score))
    return {
      userData
    };
  }
  
  export default connect(mapStateToProps)(Leaderboard);
