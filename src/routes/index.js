import { AppScreens } from "./app.routes";
import { AuthScreens } from "./auth.routes";
import { useContextApp } from "../context";

export const Routes = () => {
  const { user } = useContextApp();
  return user ? <AppScreens/> : <AuthScreens/>
}