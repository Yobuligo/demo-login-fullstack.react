import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useSession } from "../hooks/useSession";
import { Routes } from "../routes/Routes";

export const HomePage: React.FC = () => {
  const session = useSession();
  const logout = useLogout();
  const navigate = useNavigate();

  const onLogin = () => navigate(Routes.loginPage.toPath());

  const onLogout = () => {
    logout();
    navigate(Routes.loginPage.toPath());
  };

  const onProducts = () => navigate(Routes.productPage.toPath());

  return (
    <>
      <h1>Welcome to my Demo side</h1>
      <h4>Login via click on the button login</h4>
      <button onClick={onProducts}>Products</button>
      {session ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <button onClick={onLogin}>Login</button>
      )}
    </>
  );
};
