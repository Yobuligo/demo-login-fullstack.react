import { configureRoutes } from "./core/configureRoutes";
import { route } from "./core/route";

export const Routes = configureRoutes({
  contactPage: route("/contact"),
  homePage: route("/"),
  loginPage: route("/login"),
  productPage: route("/products"),
  registerPage: route("/register"),
});
