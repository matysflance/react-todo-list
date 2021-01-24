import { CheckboxWrapper, Checkmark, Checkbox } from './CustomCheckbox.styles';

export const CustomCheckbox = (props) => {
  return (
    <>
      <CheckboxWrapper>
        <Checkmark />
        <Checkbox type="checkbox" {...props} />
      </CheckboxWrapper>
    </>
  );
};
