import { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../config/firebase/firebaseConfig';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log('auth state changed');
      setUser(userAuth);
    });
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
