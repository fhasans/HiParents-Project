import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
function* getNannyList() {
  try {
    const resGetNannyList = yield axios({
      method: 'GET',
      url: 'https://hi-parent-be.herokuapp.com/nannies?sort=ASC',
    });
    yield put({type: 'GET_NANNY_LIST_SUCCESS', data: resGetNannyList.data});
  } catch (err) {
    console.log(err);
  }
}
function* getNannyActive() {
  try {
    const resGetNannyActive = yield axios({
      method: 'GET',
      url: 'https://hi-parent-be.herokuapp.com/nannies/status-active',
    });
    yield put({type: 'GET_NANNY_ACTIVE_SUCCESS', data: resGetNannyActive.data});
  } catch (err) {
    console.log(err);
  }
}
function* getNannyInactive() {
  try {
    const resGetNannyInactive = yield axios({
      method: 'GET',
      url: 'https://hi-parent-be.herokuapp.com/nannies/status-inactive',
    });
    // console.log(resGetNannyInactive.data);
    yield put({
      type: 'GET_NANNY_INACTIVE_SUCCESS',
      data: resGetNannyInactive.data,
    });
  } catch (err) {
    console.log(err);
  }
}
function* getNannyAscending() {
  try {
    const resGetNannyAscending = yield axios({
      method: 'GET',
      url: 'https://hi-parent-be.herokuapp.com/nannies?orders=name&sort=ASC',
    });

    // console.log('ascending data : ', resGetNannyAscending.data);
    yield put({
      type: 'GET_NANNY_ASCENDING_SUCCESS',
      data: resGetNannyAscending.data.nannies,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getNannyDescending() {
  try {
    const resGetNannyDescending = yield axios({
      method: 'GET',
      url: 'https://hi-parent-be.herokuapp.com/nannies?orders=name',
    });

    // console.log(resGetNannyDescending.data);
    yield put({
      type: 'GET_NANNY_DESCENDING_SUCCESS',
      data: resGetNannyDescending.data.nannies,
    });
  } catch (err) {
    console.log(err);
  }
}

function* reqAssignChild(action){
  try {
       const token = yield AsyncStorage.getItem('TOKEN');
        let config = {
            'Authorization': `Bearer ${token}`,
            'Content-Type' : 'application/json'
        }
        const formData = {
         appointment_id: [action.data]
        }
        // console.log('THIS IS FROM NANNY SAGA : ',typeof formData.appointment_id[0]);
        // console.log('DATA TOKEN DARI NANNY SAGA',token);
      const resAssignChild = yield axios ({
        method: 'PUT',
        url: 'https://hi-parent-be.herokuapp.com/children/',
        data: formData,
        headers: config
      })
      if(resAssignChild && resAssignChild.data){
        yield put ({type: 'CHILD_ASSIGNED', data: resAssignChild.data})
        // console.log('SUCCESS', resAssignChild.data);
      }
  } catch (error) {
    console.log(error);
  }
}

function* getNannyChild(action){
  try {
    console.log('ID NANNY: ',action.data);
  const resGetNannyChild = yield axios ({
    method: 'GET',
    url: `https://hi-parent-be.herokuapp.com/nannies/${
      action.data.length==1
      ?
      '00'+action.data
      :
      action.data.length==2
      ?
      '0'+action.data:action.data
    }`
  })
  yield put ({type: 'CHILD_DATA_RECEIVED', data: resGetNannyChild.data.data.appointments})
  console.log('SUCCESS GET NANNY CHILD', resGetNannyChild.data);
  } catch (error) {
    console.log(error);
  }
}

function* nannySaga() {
  yield takeLatest('GET_NANNY_LIST', getNannyList);
  yield takeLatest('GET_NANNY_ACTIVE', getNannyActive);
  yield takeLatest('GET_NANNY_INACTIVE', getNannyInactive);
  yield takeLatest('GET_NANNY_ASCENDING', getNannyAscending);
  yield takeLatest('GET_NANNY_DESCENDING', getNannyDescending);
  yield takeLatest('REQ_ASSIGN_CHILD', reqAssignChild)
  yield takeLatest('GET_NANNYCHILD_DATA', getNannyChild)
}

export default nannySaga;
