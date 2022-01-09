import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

function* getAppointment (action){
    try {
        // console.log('START');
        const resGetAppoint = yield axios({
            method: 'GET',
            url: 'https://hi-parent-be.herokuapp.com/appointments/',
          });
          yield put({type: 'APPOINTMENT_DATA_RECEIVED', data: resGetAppoint.data.data})
        //   console.log(resGetAppoint.data);
    } catch (error) {
        console.log(error);
    }
}

function* updateAppointStatus (action){
    // console.log('UPDATE APPOINTMENT STATUS',action.data);
    try {
        const token = yield AsyncStorage.getItem('TOKEN');
        let config = {
            'Authorization': `Bearer ${token}`
        }
        const formData = new FormData();
        formData.append('appointment_id', action.data.appointment_id)
        formData.append('appointment_status', action.data.appointment_status)
        // console.log('INI PASSINGAN DARI CHANGE PASSWORD',formData);
        const resUpdateStatus = yield axios ({
            method: 'PUT',
            url: 'https://hi-parent-be.herokuapp.com/appointments/setStatus',
            data: formData,
            headers: config,         
        });
        if(resUpdateStatus && resUpdateStatus.data){
            yield put ({type: 'APPOINTMENT_STATUS_UPDATED', data: resUpdateStatus.data});
            Alert.alert('Status: ', 'Appointment has been '+action.data.appointment_status+'ed',[
                {
                    text: 'Ok',
                    onPress: ()=> action.navigasi.navigate('Client List')
                }
            ]);
            yield put({type: 'REQ_APPOINTMENT_DATA'});
            // action.navigasi.navigate('Client List');
        }
        // console.log('UPDATE STATUS',resUpdateStatus);
    } catch (error) {
        console.log(error);
    }
}

function* rootSaga() {
    yield takeLatest('REQ_APPOINTMENT_DATA', getAppointment);
    yield takeLatest('REQ_UPDATE_APPOINTMENT_STATUS', updateAppointStatus);

  }

  export default rootSaga;