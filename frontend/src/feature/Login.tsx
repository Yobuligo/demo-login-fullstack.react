import { Card } from "../components/card/Card";
import { LabeledInput } from "../components/labeledInput/LabeledInput";
import styles from "./Login.module.scss";

export const Login: React.FC = () => {
  return (
    <Card className={styles.login}>
      <LabeledInput label="Username" />
      <LabeledInput label="Password" />
      <div className={styles.button}>
        <button>Login</button>
        <button>Cancel</button>
      </div>
    </Card>
  );
};
