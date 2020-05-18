import React,{Component} from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/_DATA'


class Home extends Component{
    render(){
        return(
            <div>
              <NavBar/>
              <h1>This is home page</h1> 
            </div>
        )
    }
}

function mapStateToProps (questions,authUser,users) {
   const question = questions.questions
    console.log(question)
    return {
     authUser,
      question: question
    }
  }

export default connect(mapStateToProps)(Home);