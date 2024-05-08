import { createBrowserRouter } from "react-router-dom";
import { ContactPage } from "../page/ContactPage";
import { HomePage } from "../page/HomePage";
import { LoginPage } from "../page/LoginPage";
import { ProductPage } from "../page/ProductPage";
import { RegisterPage } from "../page/RegisterPage";
import { Routes } from "./Routes";

export const AppRouter = createBrowserRouter([
  { path: Routes.homePage.origin, element: <HomePage /> },
  { path: Routes.productPage.origin, element: <ProductPage /> },
  { path: Routes.contactPage.origin, element: <ContactPage /> },
  { path: Routes.registerPage.origin, element: <RegisterPage /> },
  { path: Routes.loginPage.origin, element: <LoginPage /> },
]);
