import { ReactNode } from "react";

export interface IFormProps {
  cancelCaption?: string;
  children: ReactNode;
  confirmCaption?: string;
  errorMessage?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}
