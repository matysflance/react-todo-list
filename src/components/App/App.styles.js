import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;
  background-color: var(--main-background-color);

  display: flex;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;
