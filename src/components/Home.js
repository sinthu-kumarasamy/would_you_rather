import React, { Component } from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";
import { Tab } from "semantic-ui-react";
import UserCard from "./UserCard";

class Home extends Component {
  render() {
    const {answeredQuestions,unansweredQuestions} = this.props
    return (
      <div>
        <NavBar />
        <Tab className="tab" panes={panes({answeredQuestions,unansweredQuestions})} />
      </div>
    );
  }
}

const panes = (props) =>{
return[
  {
    menuItem: "Unasnwered",
    render: () => (
      <Tab.Pane>
        {props.unansweredQuestions.map((question)=>(
             <UserCard key={question.id} question={question}/>
        ))}
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered",
    render: () => (
      <Tab.Pane>
         {props.answeredQuestions.map((question)=>(
             <UserCard key={question.id} question={question}/>
        ))}
      </Tab.Pane>
    ),
  },
];
}

function mapStateToProps({ questions, authUser, users }) {
  const answers = Object.keys(users[authUser].answers);
  const answeredQuestions = Object.values(questions)
    .filter((question) => !answers.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unansweredQuestions = Object.values(questions)
    .filter((question) => answers.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
    console.log(answeredQuestions)
    console.log(unansweredQuestions)
  return {
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(Home);
