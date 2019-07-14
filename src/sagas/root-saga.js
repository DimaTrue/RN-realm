import { all } from 'redux-saga/effects';

import userData from './userData';
import products from './products';


export default function* rootSaga() {
  yield all([
    userData(),
    products(),
  ]);
}
