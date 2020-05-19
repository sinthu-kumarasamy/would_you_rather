import React, { Component } from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import UserCard from "./UserCard";

class Home extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <div>
        <NavBar />
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
            <UserCard key={question.id} id={question.id} answered="false" />
          ))}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane>
          {props.answeredQuestions.map((question) => (
            <UserCard key={question.id} id={question.id} answered="true" />
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
