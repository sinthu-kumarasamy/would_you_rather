import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER"

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

export function addAnswer(authUser,answer,question_id){
    return{
        type : ADD_ANSWER,
        authUser,
        answer,
        question_id
    }
}

export function handleAddQuestion({ optionOne, optionTwo, authUser }) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion({optionOneText:optionOne, optionTwoText:optionTwo, author:authUser })
      .then((question) => dispatch(addQuestions(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddAnswer({authUser,answer,question_id}){
  return (dispatch) =>{
      dispatch(showLoading());
      dispatch(addAnswer(authUser,answer,question_id))
      return saveQuestionAnswer({authedUser:authUser, qid:question_id, answer:answer})
      .then(()=>dispatch(hideLoading()))
  }
}
