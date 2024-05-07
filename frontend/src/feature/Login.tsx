import { useNavigate } from "react-router-dom";
import { Card } from "../components/card/Card";
import { LabeledInput } from "../components/labeledInput/LabeledInput";
import { Routes } from "../routes/Routes";
import styles from "./Login.module.scss";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate(Routes.productPage.toPath());
  };

  return (
    <Card className={styles.login}>
      <LabeledInput label="Username" />
      <LabeledInput label="Password" type="password" />
      <div className={styles.button}>
        <button onClick={onLogin}>Login</button>
        <button>Cancel</button>
      </div>
    </Card>
  );
};
