import { HTMLInputTypeAttribute } from "react";

export interface ILabeledInputProps {
  label: string;
  onChange?: (newValue: string) => void;
  type?: HTMLInputTypeAttribute | undefined;
  value?: string;
}
