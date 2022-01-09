import {combineReducers} from 'redux';
import auth from './auth';
import register from './register';
import dashboard from './dashboard';
import user from './user';
import clientlist from './clientlist';
import nanny from './nanny';
import childAct from './childAct'
import moreUserProfile from './more';


export default combineReducers({
  auth,
  register,
  user,
  dashboard,
  clientlist,
  nanny,
  childAct,
  moreUserProfile
});
