import { combineReducers } from 'redux';
import loginDataReducer from './loginDataReducers';

export default combineReducers({
  loginData: loginDataReducer,
});