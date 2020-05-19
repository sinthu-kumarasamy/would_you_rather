import { saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTIONS = "ADD_QUESTIONS";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestions(question) {
  return {
    type: ADD_QUESTIONS,
    question,
  };
}

export function handleAddQuestion({ optionOne, optionTwo, authUser }) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion({optionOneText:optionOne, optionTwoText:optionTwo, author:authUser })
      .then((question) => dispatch(addQuestions(question)))
      .then(() => dispatch(hideLoading()));
  };
}
