import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* getChildAct(action){
    try {
        const resGetC_Act = yield axios({
            method: 'GET',
            url: 'https://hi-parent-be.herokuapp.com/activity/'
        });
        yield put({type: 'CHILD_ACT_DATA_RECEIVED', data: resGetC_Act.data.data})
        // console.log('THIS IS CHILD SAGA : ',resGetC_Act.data.data);
    } catch (error) {
        console.log(error);
    }
}

function* getAllActOfEachChild(action){
    try {

        // const appointment_id=resGetC_Act.data.data.appointment.appointment_id
        const resGetAllKidEach = yield axios ({
            method: 'GET',
            url: `https://hi-parent-be.herokuapp.com/activity/${action.data}`
        });
        yield put({type: 'ALL_ACT_FROM_EACH_CHILD_RECEIVED', data: resGetAllKidEach.data.finalData})
        // console.log('EACH ACTIVITY: ',resGetAllKidEach.data.finalData);
        // console.log(action.data);
    } catch (error) {
        console.log(error);
    }
}

function* postActivity(action){
    try {
        const token = yield AsyncStorage.getItem('TOKEN');
        let config = {
            'Authorization': `Bearer ${token}`
        }
        const formData = new FormData();
        formData.append('appointment_id', action.data.appointment_id)
        formData.append('activity_detail', action.data.activity_detail)
        formData.append('photo', action.data.rawImage)
        formData.append('time', action.data.time)
        // console.log('FORM DATA', formData);
        const resPostActivity = yield axios({
            method: 'POST',
            url:'https://hi-parent-be.herokuapp.com/activity',
            data: formData,
            headers: config
        });
        if(resPostActivity && resPostActivity.data){
            // console.log('ACTIVITY CREATED',resPostActivity.data);
            yield put ({type: 'ACTIVITY_CREATED'})
            // Alert.alert('Activity Created')
        }
    } catch (error) {
        console.log(error);
    }
}

function* updateActivity(action){
    try {
        const token = yield AsyncStorage.getItem('TOKEN');
        let config = {
            'Authorization': `Bearer ${token}`
        }
        const formData = new FormData();
        formData.append('id', action.data.Id)
        formData.append('activity_detail', action.data.activity_details)
        formData.append('photo', action.data.rawImage)
        formData.append('time', action.data.times)
        // console.log('FORM DATA CHILD UPDATE', formData);
        const resUpActivity = yield axios({
            method: 'PUT',
            url:'https://hi-parent-be.herokuapp.com/activity',
            data: formData,
            headers: config
        });
        // console.log('ACTIVITY UPDATED',resUpActivity);
        yield put({type: 'ACTIVITY_UPDATED'})
    } catch (error) {
        console.log(error);
    }
}

function* deleteActivity(action){
    try {
        const token = yield AsyncStorage.getItem('TOKEN');
        let config = {
            'Authorization': `Bearer ${token}`
        }
        const formData = new FormData();
        formData.append('id', action.data)
        // console.log('FORM DATA CHILD DELETE', formData);
        const resDelActivity = yield axios({
            method: 'DELETE',
            url:'https://hi-parent-be.herokuapp.com/activity',
            data: formData,
            headers: config
        });
        // console.log('ACTIVITY DELETED',resDelActivity);
        yield put({type: 'ACTIVITY_DELETED'})
    } catch (error) {
        console.log(error);
    }
}


function* rootSaga(){
    
    yield takeLatest('REQ_CHILD_ACT_DATA', getChildAct)
    yield takeLatest('REQ_ALL_ACT_FROM_EACH_CHILD', getAllActOfEachChild)
    yield takeLatest('REQ_CREATE_ACTIVITY',postActivity)
    yield takeLatest('REQ_UPDATE_ACTIVITY',updateActivity)
    yield takeLatest('REQ_DELETE_ACTIVITY', deleteActivity)
}

export default rootSaga;