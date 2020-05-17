import {
    _getUsers,
    _saveQuestionAnswer,
    _saveQuestion,
  } from './_DATA.js'
  
  export function getInitialData () {
    return _getUsers().then((users) => ({
      users,
    }))
  }
  
  export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
  }
  
  export function saveQuestion (info) {
    return _saveQuestion(info)
  }