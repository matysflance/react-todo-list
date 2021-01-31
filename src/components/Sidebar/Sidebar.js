import { useState } from 'react';
import { StyledSidebar, ProfileWrapper, ProfileImage, Toggler } from './Sidebar.styles';
import { NavLink } from 'react-router-dom';
import { NavigationPaths } from '../../config/routing/NavigationPaths';
import { useUserContext } from '../../context/userContext';

export const Sidebar = () => {
  const { user, signOut } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeSidebar = () => setIsOpen(false);
  return (
    <StyledSidebar open={isOpen}>
      <ProfileWrapper>
        <Toggler onClick={toggleSidebar} />
        <ProfileImage src="https://placeimg.com/300/300/people" alt="<USER> avatar" />
        <p>{user ? user.email : 'Loading user...'}</p>

        <ul>
          <NavLink to={NavigationPaths.TODOS} onClick={closeSidebar}>
            Todos
          </NavLink>
          <NavLink to={NavigationPaths.LOGIN} onClick={closeSidebar}>
            Login
          </NavLink>
          <NavLink to={NavigationPaths.REGISTER} onClick={closeSidebar}>
            Register
          </NavLink>
          <button onClick={signOut}>Log out</button>
        </ul>
      </ProfileWrapper>
    </StyledSidebar>
  );
};
