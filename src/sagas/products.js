import {
  put, takeEvery, all
} from 'redux-saga/effects';

import { getProductList } from '../api-client/products';
import * as types from '../action-types/products';

export function* watchGetProducts() {
  yield takeEvery(types.GET_PRODUCTS_INIT, getProducts);
}

export function* getProducts() {
  try {
    const result = yield getProductList();
    yield put({ type: types.GET_PRODUCTS_SUCCESS, payload: result.data.data, });
  } catch (error) {
    yield put({ type: types.GET_PRODUCTS_FAILURE, payload: error });
  }
}

export default function* products() {
  yield all([
    watchGetProducts(),
  ]);
}
