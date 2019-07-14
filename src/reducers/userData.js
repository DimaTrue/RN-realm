import * as user from '../action-types/userData';

const initialState = {
  isLoading: false,
  signInResponse: '',
  signUpResponse: '',
  signOutResponse: '',
  errorSignIn: '',
  errorSignUp: '',
  signOutError: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case user.SIGN_IN_INIT:
      return { ...state, isLoading: true };

    case user.SIGN_IN_SUCCESS:
      return { ...state, signInResponse: action.payload, isLoading: false };

    case user.SIGN_IN_FAILURE:
      return { ...state, errorSignIn: action.payload, isLoading: false };

    case user.SIGN_UP_INIT:
      return { ...state, isLoading: true };

    case user.SIGN_UP_SUCCESS:
      return { ...state, signUpResponse: action.payload, isLoading: false };

    case user.SIGN_UP_FAILURE:
      return { ...state, errorSignUp: action.payload, isLoading: false };

    case user.SIGN_OUT_INIT:
      return { ...state, isLoading: true };

    case user.SIGN_OUT_SUCCESS:
      return { ...state, signOutResponse: action.payload, isLoading: false };

    case user.SIGN_OUT_FAILURE:
      return { ...state, signOutError: action.payload, isLoading: false };

    default:
      return state;
  }
}
