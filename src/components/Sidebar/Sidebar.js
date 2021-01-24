import { StyledSidebar, ProfileWrapper, ProfileImage } from './Sidebar.styles';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <ProfileWrapper>
        <ProfileImage src="https://placeimg.com/300/300/people" alt="<USER> avatar" />
        <p>Sebastian Matysiak</p>
      </ProfileWrapper>
    </StyledSidebar>
  );
};
