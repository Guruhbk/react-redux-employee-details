import {createStore} from 'redux';
import personalDetailsReducer from '../reducer';
const store = createStore(personalDetailsReducer);
export default store;