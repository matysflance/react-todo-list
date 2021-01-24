import styled from 'styled-components';

export const StyledCustomCheckbox = styled.label`
  display: flex;
  align-items: center;
`;

export const CheckboxWrapper = styled.div`
  position: relative;
  height: 2.5rem;
  padding-left: 3.2rem;
`;

export const Checkmark = styled.span`
  /* background-color: red; */
  position: absolute;
  top: 0;
  left: 0;
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  color: #fff;
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    display: none;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${Checkmark} {
    background-color: var(--color-primary);
  }

  &:checked ~ ${Checkmark}::after {
    display: flex;
    content: '✓';
  }
`;
