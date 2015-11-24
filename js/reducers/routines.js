import { ADD_ROUTINE } from '../constants/ActionTypes';

export default function routines(state = [], action) {
  switch (action.type) {
    case ADD_ROUTINE:
      return [...state, action.text];
      break;
    default:
      return state;
  }
}
