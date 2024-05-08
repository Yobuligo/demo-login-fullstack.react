import { Navigate } from "react-router-dom";
import { useSession } from "../../../hooks/useSession";
import { Routes } from "../../../routes/Routes";
import { Page } from "../page/Page";
import { IProtectedPageProps } from "./IProtectedPageProps";

export const ProtectedPage: React.FC<IProtectedPageProps> = (props) => {
  const session = useSession();

  if (!session) {
    return <Navigate to={Routes.loginPage.toPath()} />;
  }
  return <Page>{props.children}</Page>;
};
