import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { UserRepo } from "../../api/UserRepo";
import { Form } from "../../components/form/Form";
import { LabeledInput } from "../../components/labeledInput/LabeledInput";
import { Routes } from "../../routes/Routes";
import { isError } from "../../shared/utils/isError";

export const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onChangeUsername = (username: string) => setUsername(username);

  const onChangePassword = (password: string) => setPassword(password);

  const onChangeFirstname = (firstname: string) => setFirstname(firstname);

  const onChangeLastname = (lastname: string) => setLastname(lastname);

  const isConfirmDisabled =
    username.length === 0 ||
    password.length === 0 ||
    firstname.length === 0 ||
    lastname.length === 0;

  const onRegister = async () => {
    try {
      await UserRepo.register({
        firstname,
        lastname,
        password,
        username,
      });
      navigate(Routes.homePage.toPath());
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
      errorMessage={errorMessage}
      isConfirmDisabled={isConfirmDisabled}
      onCancel={onCancel}
      onConfirm={onRegister}
    >
      <LabeledInput
        autofocus={true}
        onChange={onChangeUsername}
        label="Username"
        value={username}
      />
      <LabeledInput
        onChange={onChangePassword}
        label="Password"
        type="password"
        value={password}
      />
      <LabeledInput
        onChange={onChangeFirstname}
        label="Firstname"
        value={firstname}
      />
      <LabeledInput
        onChange={onChangeLastname}
        label="Lastname"
        value={lastname}
      />
    </Form>
  );
};
