import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import accountReducer from './accountReducer';

export default combineReducers({
  alertReducer,
  authReducer,
  accountReducer,
});