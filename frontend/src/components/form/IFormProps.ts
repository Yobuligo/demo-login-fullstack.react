import { ReactNode } from "react";

export interface IFormProps {
  cancelCaption?: string;
  children: ReactNode;
  confirmCaption?: string;
  errorMessage?: string;
  isConfirmDisabled?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
}
