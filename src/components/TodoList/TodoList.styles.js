import styled from 'styled-components';

export const StyledTodoList = styled.article`
  background-color: #fff;
  border-radius: var(--border-radius);
`;

export const Header = styled.header`
  padding: 0.7rem 1.5rem;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d8d8d8;
`;
export const Title = styled.h2`
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Body = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;
