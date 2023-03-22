import { AppScreens } from "./app.routes";
import { AuthScreens } from "./auth.routes";

export const Routes = () => {
  const isAuthenticated = false;
  return isAuthenticated ? <AppScreens/> : <AuthScreens/>
}