import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/Routes";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const onLogin = () => navigate(Routes.loginPage.toPath());
  return (
    <>
      <h1>Welcome to my Demo side</h1>
      <h4>Login via click on the button login</h4>
      <button onClick={onLogin}>Login</button>
    </>
  );
};
