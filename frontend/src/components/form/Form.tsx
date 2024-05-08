import { Card } from "../card/Card";
import styles from "./Form.module.scss";
import { IFormProps } from "./IFormProps";

export const Form: React.FC<IFormProps> = (props) => {
  const onChange = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <Card className={styles.form}>
      <form action="submit" onChange={onChange}></form>
      {props.children}
      {props.errorMessage && (
        <div className={styles.errorMessage}>{props.errorMessage}</div>
      )}
      <div className={styles.footer}>
        <button onClick={props.onConfirm} disabled={props.isConfirmDisabled}>
          {props.confirmCaption ?? "Okay"}
        </button>
        <button onClick={props.onCancel}>
          {props.cancelCaption ?? "Cancel"}
        </button>
      </div>
    </Card>
  );
};
