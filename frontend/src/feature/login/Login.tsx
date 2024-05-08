import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRepo } from "../../api/UserRepo";
import { Card } from "../../components/card/Card";
import { LabeledInput } from "../../components/labeledInput/LabeledInput";
import { Routes } from "../../routes/Routes";
import { isError } from "../../shared/utils/isError";
import styles from "./Login.module.scss";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = async () => {
    try {
      const session = await UserRepo.login(username, password);
      navigate(Routes.productPage.toPath());
    } catch (error) {
      if (isError(error)) {
        setErrorMessage(error.reason);
      } else {
        setErrorMessage("Unknown error");
      }
    }
  };

  const onRegister = async () => {
    navigate(Routes.registerPage.toPath());
  };

  return (
    <Card className={styles.login}>
      <LabeledInput
        label="Username"
        onChange={(username) => setUsername(username)}
        value={username}
      />
      <LabeledInput
        label="Password"
        onChange={(password) => setPassword(password)}
        type="password"
        value={password}
      />
      <div className={styles.button}>
        <button onClick={onLogin}>Login</button>
        <button onClick={onRegister}>Register</button>
        <button>Cancel</button>
      </div>
      {errorMessage && <div>{errorMessage}</div>}
    </Card>
  );
};
