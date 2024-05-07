import { useId } from "react";
import { ILabeledInputProps } from "./ILabeledInputProps";

export const LabeledInput: React.FC<ILabeledInputProps> = (props) => {
  const id = useId();

  return (
    <>
      <label htmlFor={id}>{props.label}</label>
      <input id={id} type={props.type} />
    </>
  );
};
