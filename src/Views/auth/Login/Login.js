import { useReducer } from 'react';
import { auth } from '../../../config/firebase/firebaseConfig';

import { NavigationPaths } from '../../../config/routing/NavigationPaths';
import { SIGNIN_ACTIONS } from '../../../actions/signinActions';
import { signinReducer } from '../../../reducers/signinReducer';
import { useHistory } from 'react-router-dom';

const initialSigninState = {
  email: '',
  password: '',
  errorCode: '',
  errorMessage: '',
};

export const Login = () => {
  const history = useHistory();
  const [signinState, dispatch] = useReducer(signinReducer, initialSigninState);

  const handleEmailChanged = (e) => {
    dispatch({ type: SIGNIN_ACTIONS.EMAIL_CHANGED, payload: { email: e.target.value } });
  };
  const handlePasswordChanged = (e) => {
    dispatch({ type: SIGNIN_ACTIONS.PASSWORD_CHANGED, payload: { password: e.target.value } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(signinState.email, signinState.password)
      .then((userCredential) => {
        history.push(NavigationPaths.TODOS);
      })
      .catch((error) => {
        dispatch({ type: SIGNIN_ACTIONS.ERROR_OCCURED, payload: { error: error } });
      });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          value={signinState.email}
          onChange={(e) => handleEmailChanged(e)}
          required
        />
        <input
          type="password"
          value={signinState.password}
          onChange={(e) => handlePasswordChanged(e)}
          required
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
