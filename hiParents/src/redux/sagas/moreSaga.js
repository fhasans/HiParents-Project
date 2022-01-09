import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';

function* getUserProfile() {
  try {
    const token = yield AsyncStorage.getItem('TOKEN');
    let config = {
      Authorization: `Bearer ${token}`,
    };
    const resGetUserProfile = yield axios({
      method: 'GET',
      url: 'https://hi-parent-be.herokuapp.com/nannies/profile',
      headers: config,
    });
    console.log('GET : ', resGetUserProfile.data);
    yield put({
      type: 'GET_USER_PROFILE_SUCCESS',
      data: resGetUserProfile.data.userProfile,
    });
  } catch (err) {
    console.log(err);
  }
}

function* editUserProfile(action) {
  try {
    const token = yield AsyncStorage.getItem('TOKEN');
    let config = {
      Authorization: `Bearer ${token}`,
    };
    const resEditUserProfile = yield axios({
      method: 'PUT',
      url: 'https://hi-parent-be.herokuapp.com/nannies/profile',
      headers: config,
      data: action.data,
    });
    yield put({
      type: 'EDIT_USER_PROFILE_SUCCESS',
      data: resEditUserProfile.data.data,
    });
    ToastAndroid.show('Profile berhasil diedit', ToastAndroid.SHORT);
    action.navigasi('More');
    console.log('EDIT: ', resEditUserProfile.data);
  } catch (err) {
    console.log(err);
  }
}

function* moreSaga() {
  yield takeLatest('GET_USER_PROFILE', getUserProfile);
  yield takeLatest('EDIT_USER_PROFILE', editUserProfile);
}

export default moreSaga;
