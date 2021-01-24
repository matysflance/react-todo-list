import styled from 'styled-components';
export const StyledButton = styled.button`
  color: var(--color-${(props) => (props.secondary ? 'secondary' : 'primary')});
  background-color: transparent;
  border: 1px solid var(--color-${(props) => (props.secondary ? 'secondary' : 'primary')});
  border-radius: var(--border-radius);
  padding: 0.5rem 1rem;
  cursor: pointer;
  appearance: none;
  text-decoration: none;
  transition: 0.2s all var(--default-transition-timing-function);

  &:hover {
    text-decoration: none;
    background-color: var(--color-${(props) => (props.secondary ? 'secondary' : 'primary')});
    color: #fff;
  }
`;
