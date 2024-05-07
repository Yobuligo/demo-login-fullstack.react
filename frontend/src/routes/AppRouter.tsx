import { createBrowserRouter } from "react-router-dom";
import { ContactPage } from "../page/ContactPage";
import { LoginPage } from "../page/LoginPage";
import { ProductPage } from "../page/ProductPage";
import { Routes } from "./Routes";

export const AppRouter = createBrowserRouter([
  { path: Routes.homePage.origin, element: <LoginPage /> },
  { path: Routes.productPage.origin, element: <ProductPage /> },
  { path: Routes.contactPage.origin, element: <ContactPage /> },
]);
