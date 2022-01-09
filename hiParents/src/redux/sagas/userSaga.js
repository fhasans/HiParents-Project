import {takeLatest, put} from '@redux-saga/core/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

function* changepassword(action) {
    try {
        const token = yield AsyncStorage.getItem('TOKEN');
        let config = {
            'Authorization': `Bearer ${token}`
        }
        const formData = new FormData();
        formData.append('oldPassword', action.data.oldPassword)
        formData.append('newPassword', action.data.newPassword)
        // console.log('INI PASSINGAN DARI CHANGE PASSWORD',formData);
        const resEditPassword = yield axios ({
            method: 'PUT',
            url: 'https://hi-parent-be.herokuapp.com/users/change-password',
            data: formData,
            headers: config,
            
        });
        if(resEditPassword && resEditPassword.data){
            yield put ({type: 'EDIT_PASSWORD_SUCCESS'})
            Alert.alert('Password Changed')
        }
    } catch (err) {
        console.log(err);
        yield put({type: 'REQ_EDIT_FAILED'})
    }
}

function* rootSaga() {
    yield takeLatest('REQ_EDIT_PASSWORD', changepassword);
  }
  
  export default rootSaga;
  