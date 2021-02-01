import { SIGNUP_ACTIONS } from '../actions/signupActions';

export const signupReducer = (signupState, action) => {
  console.log(action);
  switch (action.type) {
    case SIGNUP_ACTIONS.EMAIL_CHANGED:
      return {
        ...signupState,
        email: action.payload.email,
      };
    case SIGNUP_ACTIONS.PASSWORD_CHANGED:
      return {
        ...signupState,
        password: action.payload.password,
      };
    case SIGNUP_ACTIONS.ERROR_OCCURED:
      return {
        ...signupState,
        errorCode: action.payload.error.code,
        errorMessage: action.payload.error.message,
      };
    default:
      return signupState;
  }
};
