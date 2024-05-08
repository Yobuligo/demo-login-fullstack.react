import { HTMLInputTypeAttribute } from "react";

export interface ILabeledInputProps {
  autofocus?: boolean;
  label: string;
  onChange?: (newValue: string) => void;
  type?: HTMLInputTypeAttribute | undefined;
  value?: string;
}
