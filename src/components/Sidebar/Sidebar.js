import { useState } from 'react';
import { StyledSidebar, ProfileWrapper, ProfileImage, Toggler } from './Sidebar.styles';
import { NavLink, useHistory } from 'react-router-dom';
import { NavigationPaths } from '../../config/routing/NavigationPaths';
import { useUserContext } from '../../context/userContext';
import { auth } from '../../config/firebase/firebaseConfig';
import { Button } from '../Button/Button';

export const Sidebar = () => {
  const history = useHistory();
  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeSidebar = () => setIsOpen(false);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        history.push(NavigationPaths.LOGIN);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledSidebar open={isOpen}>
      <ProfileWrapper>
        <Toggler onClick={toggleSidebar} />
        {user ? (
          <>
            <ProfileImage src="https://placeimg.com/300/300/people" alt="<USER> avatar" />
            <p>{user ? user.email : 'Loading user...'}</p>
            <ul>
              <NavLink to={NavigationPaths.TODOS} onClick={closeSidebar}>
                Todos
              </NavLink>

              <NavLink to={NavigationPaths.REGISTER} onClick={closeSidebar}>
                Register
              </NavLink>
              <Button secondary onClick={handleSignOut}>
                Log out
              </Button>
            </ul>
          </>
        ) : (
          <NavLink to={NavigationPaths.LOGIN} onClick={closeSidebar}>
            <Button>Login</Button>
          </NavLink>
        )}
      </ProfileWrapper>
    </StyledSidebar>
  );
};
