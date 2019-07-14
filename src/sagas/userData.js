import {
  call, put, takeEvery, all
} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import { signInUser, signUpUser, signOutUser } from '../api-client/userData';
import NavigationService from '../navigation/NavigationService';
import * as types from '../action-types/userData';


export function* watchSignIn() {
  yield takeEvery(types.SIGN_IN_INIT, signIn);
}

export function* signIn({ payload }) {
  try {
    const result = yield signInUser(payload);
    yield AsyncStorage.setItem('userData', JSON.stringify(result));
    yield put({ type: types.SIGN_IN_SUCCESS, payload: result, });
    yield call(() => NavigationService.navigate('AuthLoading'));
  } catch (error) {
    yield put({ type: types.SIGN_IN_FAILURE, payload: error });
  }
}

export function* watchSignUp() {
  yield takeEvery(types.SIGN_UP_INIT, signUp);
}

export function* signUp({ payload }) {
  try {
    const result = yield signUpUser(payload);
    yield put({ type: types.SIGN_UP_SUCCESS, payload: result, });
    yield call(() => NavigationService.navigate('AuthLoading'));
  } catch (error) {
    yield put({ type: types.SIGN_UP_FAILURE, payload: error });
  }
}

export function* watchSignOut() {
  yield takeEvery(types.SIGN_OUT_INIT, signOut);
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield AsyncStorage.clear();
    yield put({ type: types.SIGN_OUT_SUCCESS, payload: null, });
    yield call(() => NavigationService.navigate('AuthLoading'));
  } catch (error) {
    yield put({ type: types.SIGN_OUT_FAILURE, payload: error });
  }
}

export default function* userData() {
  yield all([
    watchSignIn(),
    watchSignUp(),
    watchSignOut(),
  ]);
}
