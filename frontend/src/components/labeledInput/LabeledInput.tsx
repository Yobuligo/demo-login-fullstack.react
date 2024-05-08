import { useId } from "react";
import { ILabeledInputProps } from "./ILabeledInputProps";

export const LabeledInput: React.FC<ILabeledInputProps> = (props) => {
  const id = useId();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange?.(event.target.value);

  return (
    <>
      <label htmlFor={id}>{props.label}</label>
      <input
        autoFocus={props.autofocus}
        id={id}
        onChange={onChange}
        type={props.type}
        value={props.value}
      />
    </>
  );
};
