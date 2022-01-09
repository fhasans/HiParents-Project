import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async value => {
    try {
        await AsyncStorage.setItem('TOKEN', value)
        // console.log("TOKEN STORED (THIS LOG COMES FROM AUTH SAGA)");
    } catch (error) {
        console.log(error);
    }
}

function* login (action) {
    try {
        // console.log("START LOGIN (THIS LOG IS FROM AUTH SAGA");
        const resLogin = yield axios ({
            method: 'POST',
            url: 'https://hi-parent-be.herokuapp.com/users/login',
            data: action.data
        });
        if (resLogin && resLogin.data) {
            yield storeToken(resLogin.data.token)
            yield put ({type: 'LOGIN_SUCCESS', token: resLogin.data.token})
        }
    } catch (error) {
        console.log(error);
        yield put({type: 'LOGIN_FAILED'})
        alert('User Account Not Found')
    }
}

function* deletetoken(action) {
    try {
      resLogin = yield AsyncStorage.removeItem('TOKEN');
      yield put({type: 'TOKEN_REMOVED', token: ''});
    } catch (err) {
      console.log(err);
      yield put({type: 'FAILED TO REMOVE TOKEN'});
    }
  }
  

function* rootSaga(){
    yield takeLatest('LOGIN', login);
    yield takeLatest('REMOVE_TOKEN', deletetoken);
}

export default rootSaga;