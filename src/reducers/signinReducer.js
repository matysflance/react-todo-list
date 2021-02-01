import { SIGNIN_ACTIONS } from '../actions/signinActions';

export const signinReducer = (signinState, action) => {
  switch (action.type) {
    case SIGNIN_ACTIONS.EMAIL_CHANGED:
      return {
        ...signinState,
        email: action.payload.email,
      };
    case SIGNIN_ACTIONS.PASSWORD_CHANGED:
      return {
        ...signinState,
        password: action.payload.password,
      };
    case SIGNIN_ACTIONS.ERROR_OCCURED:
      return {
        ...signinState,
        errorCode: action.payload.error.code,
        errorMessage: action.payload.error.message,
      };
    default:
      return signinState;
  }
};
