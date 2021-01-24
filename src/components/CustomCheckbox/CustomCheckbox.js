import {
  StyledCustomCheckbox,
  CheckboxWrapper,
  Checkmark,
  Checkbox,
} from './CustomCheckbox.styles';

export const CustomCheckbox = (props) => {
  return (
    <StyledCustomCheckbox htmlFor={props.id}>
      <CheckboxWrapper>
        <Checkbox type="checkbox" {...props} />
        <Checkmark />
      </CheckboxWrapper>
      {props.label}
    </StyledCustomCheckbox>
  );
};
