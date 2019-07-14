import { combineReducers } from 'redux';

import user from './userData';
import products from './products';

export default combineReducers({
  user,
  products,
});
