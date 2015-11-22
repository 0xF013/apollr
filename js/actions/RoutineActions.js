import {ADD_ROUTINE} from '../constants/ActionTypes';

export function addRoutine(text) {
  return {
    type: ADD_ROUTINE,
    text
  }
}


