import {fname, lname} from '../action/personalDetailsAction'
const initialState = {
  fname: '',
  lname: ''
}
export default function employeeReducer(state = initialState, action) {
  console.log('state========>', state);
  console.log('action=========>', action);

  // return {   [action]:state[action] }
  switch (action.type) {
    case fname:
      console.log('case1');
      return {fname: action.fname, lname: state.lname}
      // break;
    case lname:
      return {fname: state.fname, lname: action.lname}
      // break;
    default:
      return state;

      // break;
  }
}
