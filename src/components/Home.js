import React, { Component } from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import UserCard from "./UserCard";
import LoadingBar from 'react-redux-loading-bar';
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <div>
        <NavBar/>
        <LoadingBar style={{ backgroundColor: '#780743', height: '5px' }}/>
        <Tab
          className="tab"
          panes={panes({ answeredQuestions, unansweredQuestions })}
        />
      </div>
    );
  }
}

const panes = (props) => {
  return [
    {
      menuItem: "Unasnwered",
      render: () => (
        <Tab.Pane>
          {props.unansweredQuestions.map((question) => (
             <Link to={`question/${question['id']}`} key={question.id}>
            <UserCard  id={question.id}  /></Link>
          ))}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane>
          {props.answeredQuestions.map((question) => (
             <Link to={`question/${question['id']}`}  key={question.id}>
             <UserCard id={question.id}  /></Link>
          ))}
        </Tab.Pane>
      ),
    },
  ];
};

function mapStateToProps({ questions, authUser}) {
  const answeredQuestions = Object.values(questions)
    .filter(
      (question) =>
        (question.optionOne.votes.includes(authUser) ||
        question.optionTwo.votes.includes(authUser))
    )
    .sort((a, b) => b.timestamp - a.timestamp);
  const unansweredQuestions = Object.values(questions)
    .filter(
      (question) =>
        (!question.optionOne.votes.includes(authUser) &&
        !question.optionTwo.votes.includes(authUser))
    )
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    answeredQuestions,
    unansweredQuestions,
  };
}

export default connect(mapStateToProps)(Home);
