import {ADD_ROUTINE} from '../constants/ActionTypes';

export function addRoutine(text) {
  console.log('====',{
    type: ADD_ROUTINE,
    text
  })
  return {
    type: ADD_ROUTINE,
    text
  }
}


