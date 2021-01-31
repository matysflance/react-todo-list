import { useState } from 'react';

import { useUserContext } from '../../../context/userContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useUserContext();

  const handleEmailChanged = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChanged = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" value={email} onChange={(e) => handleEmailChanged(e)} required />
        <input
          type="password"
          value={password}
          onChange={(e) => handlePasswordChanged(e)}
          required
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
