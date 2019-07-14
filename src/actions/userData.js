import {
  SIGN_IN_INIT, SIGN_UP_INIT, SIGN_OUT_INIT,
} from '../action-types/userData';


export const logIn = value => ({
  type: SIGN_IN_INIT, payload: value
});

export const registrationUser = value => ({
  type: SIGN_UP_INIT, payload: value
});

export const logOut = () => ({
  type: SIGN_OUT_INIT,
});
