import {takeLatest, put} from '@redux-saga/core/effects';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';


function* register(action){
    // console.log('DATA DR SIGN UP FORM (INI LOG DARI REG SAGA',action.data);
    try {
        const formData = new FormData();
        formData.append('name', action.data.name)
        formData.append('email', action.data.email)
        formData.append('password', action.data.password)
        formData.append('role', action.data.role)
        // console.log(formData);
        let headers = {
            'Content-Type': 'multipart/form-data',
        }
        const resReg = yield axios.post(
            'https://hi-parent-be.herokuapp.com/users/register',
            formData,
            {headers},
        )
        // console.log('DATA REGISTER (SOURCE: regSaga)', resReg.data);
        if(resReg && resReg.data){
            yield put({type: 'REGISTER_SUCCESS'})
            Alert.alert('REGISTER SUCCESS, YOU CAN NOW LOGIN AS NANNY')
        }
    } catch (error) {
        yield put({type: 'REGISTER_FAILED'})
        alert('THE SERVER MAY BE BUSY, PLEASE TRY AGAIN LATER')
    }
}

function* rootSaga(){
    yield takeLatest('REGISTER', register)
}

export default rootSaga;