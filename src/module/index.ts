import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';

const RootReducer = combineReducers({
  LoginReducer,
});

export default RootReducer;
