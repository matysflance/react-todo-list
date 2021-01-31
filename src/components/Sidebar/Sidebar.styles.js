import styled from 'styled-components';

export const StyledSidebar = styled.div`
  background-color: var(--sidebar-background-color);
  color: #fff;
  position: fixed;
  height: 100%;
  width: 28rem;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-24rem)')};
  transition: 0.2s transform var(--default-transition-timing-function);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  z-index: 10;

  /* &.open {
    transform: translateX(0);
  } */
`;

export const ProfileWrapper = styled.div`
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 50%;
  max-width: 8rem;
  border-radius: 50%;
`;

export const Toggler = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  background-color: #fff;
`;
