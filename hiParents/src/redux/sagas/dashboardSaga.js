import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

function* getnannys() {
  try {
    const resGetnannys = yield axios({
      method: 'GET',
      url: 'https://hi-parent-be.herokuapp.com/nannies/active-nannies',
    });

    yield put({type: 'GET_NANNY_SUCCESS', data: resGetnannys.data});
  } catch (err) {
    console.log(err);
  }
}

function* getappointment() {
  try {
    const resGetAppointment = yield axios({
      method: 'GET',
      url: 'https://hi-parent-be.herokuapp.com/appointments/newest',
    });

    yield put({type: 'GET_APPOINTMENT_SUCCESS', data: resGetAppointment.data});
  } catch (err) {
    console.log(err);
  }
}

function* getclient() {
  try {
    const resGetClient = yield axios({
      method: 'GET',
      url: 'https://hi-parent-be.herokuapp.com/parents/active',
    });

    yield put({type: 'GET_CLIENT_SUCCESS', data: resGetClient.data});
  } catch (err) {
    console.log(err);
  }
}

function* dashboardSaga() {
  yield takeLatest('GET_NANNY', getnannys);
  yield takeLatest('GET_APPOINTMENT', getappointment);
  yield takeLatest('GET_CLIENT', getclient);
}

export default dashboardSaga;
