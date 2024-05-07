import { configureRoutes } from "./core/configureRoutes";
import { route } from "./core/route";

export const Routes = configureRoutes({
  homePage: route("/"),
  productPage: route("/products"),
  contactPage: route("/contact"),
});