import styled from 'styled-components';

export const StyledSidebar = styled.div`
  background-color: var(--sidebar-background-color);
  color: #fff;
  position: fixed;
  height: 100%;
  width: 28rem;
  transform: translateX(-28rem);
  transition: 0.2s transform var(--default-transition-timing-function);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  &.open {
    transform: translateX(0);
  }
`;

export const ProfileWrapper = styled.div`
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 50%;
  max-width: 8rem;
  border-radius: 50%;
`;
