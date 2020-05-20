import {
  RECEIVE_QUESTIONS,
  ADD_QUESTIONS,
  ADD_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_QUESTIONS:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case ADD_ANSWER:
      return {
        ...state,
        [action.question_id]: {
          ...state[action.question_id],
          [action.answer]: {
            ...state[action.question_id][action.answer],
            votes: state[action.question_id][action.answer].votes.concat([
              action.authUser,
            ]),
          },
        },
      };

    default:
      return state;
  }
}
