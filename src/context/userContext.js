import { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../config/firebase/firebaseConfig';

const UserContext = createContext();

const signIn = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log('signed in successfully');
    })
    .catch((error) => {
      const { code, message } = error;
      console.log('error signing in');
      console.log(code);
      console.log(message);
    });
};

const signOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log('signed out successfully');
    })
    .catch((error) => {
      console.log('error signing out');
      console.log(error);
    });
};

const signUp = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log('signed up successfully');
    })
    .catch((error) => {
      const { code, message } = error;
      console.log('error signing up');
      console.log(code);
      console.log(message);
    });
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log('auth state changed');
      setUser(userAuth);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, signIn, signOut, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
