import styled from 'styled-components';

export const StyledTodoDashboard = styled.section`
  flex-grow: 1;
`;

export const Header = styled.header`
  background-color: var(--color-primary);
  color: #fff;
  padding: 1rem 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const TodosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(30rem, 100%), 1fr));
  gap: 1rem;
  padding: 1.5rem;
`;
