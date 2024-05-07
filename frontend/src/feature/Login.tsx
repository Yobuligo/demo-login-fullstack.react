import { useNavigate } from "react-router-dom";
import { Card } from "../components/card/Card";
import { LabeledInput } from "../components/labeledInput/LabeledInput";
import styles from "./Login.module.scss";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const onLogin = () => {};

  return (
    <Card className={styles.login}>
      <LabeledInput label="Username" />
      <LabeledInput label="Password" type="password" />
      <div className={styles.button}>
        <button>Login</button>
        <button>Cancel</button>
      </div>
    </Card>
  );
};
