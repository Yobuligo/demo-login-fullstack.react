import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRepo } from "../../api/UserRepo";
import { Form } from "../../components/form/Form";
import { LabeledInput } from "../../components/labeledInput/LabeledInput";
import { AppContext } from "../../context/AppContext";
import { Routes } from "../../routes/Routes";
import { isError } from "../../shared/utils/isError";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const context = useContext(AppContext);

  const onLogin = async () => {
    try {
      const session = await UserRepo.login(username, password);
      context.session.setValue(session);
      navigate(Routes.productPage.toPath());
    } catch (error) {
      if (isError(error)) {
        setErrorMessage(error.reason);
      } else {
        setErrorMessage("Unknown error");
      }
    }
  };

  const onCancel = () => navigate(Routes.homePage.toPath());

  return (
    <Form
      confirmCaption="Login"
      errorMessage={errorMessage}
      onCancel={onCancel}
      onConfirm={onLogin}
    >
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
      <Link to={Routes.registerPage.toPath()}>Register</Link>
    </Form>
  );
};
