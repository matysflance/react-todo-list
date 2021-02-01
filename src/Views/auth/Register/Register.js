import { useState, useReducer } from 'react';

import { auth } from '../../../config/firebase/firebaseConfig';
import { Button } from '../../../components/Button/Button';
import { FormWrapper, Form, FormGroup, Input } from './Register.styles';

import { NavigationPaths } from '../../../config/routing/NavigationPaths';
import { SIGNUP_ACTIONS } from '../../../actions/signupActions';
import { signupReducer } from '../../../reducers/signupReducer';
import { useHistory } from 'react-router-dom';

const initialSignupState = {
  email: '',
  password: '',
  errorCode: '',
  errorMessage: '',
};

export const Register = () => {
  const history = useHistory();
  const [signupState, dispatch] = useReducer(signupReducer, initialSignupState);
  console.log(signupState);

  const handleEmailChanged = (e) => {
    dispatch({ type: SIGNUP_ACTIONS.EMAIL_CHANGED, payload: { email: e.target.value } });
  };
  const handlePasswordChanged = (e) => {
    dispatch({ type: SIGNUP_ACTIONS.PASSWORD_CHANGED, payload: { password: e.target.value } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(signupState.email, signupState.password)
      .then((userCredential) => {
        history.push(NavigationPaths.TODOS);
      })
      .catch((error) => {
        dispatch({ type: SIGNUP_ACTIONS.ERROR_OCCURED, payload: { error: error } });
      });
  };

  return (
    <FormWrapper>
      {signupState.errorMessage && <p>{signupState.errorMessage}</p>}
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            value={signupState.email}
            onChange={(e) => handleEmailChanged(e)}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            value={signupState.password}
            onChange={(e) => handlePasswordChanged(e)}
            required
          />
        </FormGroup>

        <Button type="submit">Create an account</Button>
      </Form>
    </FormWrapper>
  );
};
