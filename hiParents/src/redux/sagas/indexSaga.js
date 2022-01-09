import {all} from 'redux-saga/effects';
import authSaga from './authSaga';
import regSaga from './regSaga';
import userSaga from './userSaga';
import c_listSaga from './c_listSaga';
import dashboardSaga from './dashboardSaga';
import nannySaga from './nannySaga';
import childActSaga from './childActSaga'
import moreSaga from './moreSaga';


export default function* rootSaga() {
  yield all([
    authSaga(),
    regSaga(),
    userSaga(),
    dashboardSaga(),
    c_listSaga(),
    nannySaga(),
    childActSaga(),
    moreSaga(),
  ]);
}
