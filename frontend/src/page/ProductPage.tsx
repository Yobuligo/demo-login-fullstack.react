import { useNavigate } from "react-router-dom";
import { ProtectedPage } from "../components/page/protectedPage/ProtectedPage";
import { Routes } from "../routes/Routes";

export const ProductPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ProtectedPage>
      ProductPage
      <button onClick={() => navigate(Routes.homePage.toPath())}>
        homepage
      </button>
    </ProtectedPage>
  );
};
