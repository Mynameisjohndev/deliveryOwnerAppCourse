import { AppScreens } from "./app.routes";
import { AuthScreens } from "./auth.routes";
import { useContextApp } from "../context";
import { LoadScreen } from "../screens/auth/LoadScreen";

export const Routes = () => {
  const { user, authLoading } = useContextApp();
  return authLoading ? <LoadScreen /> :  user ? <AppScreens/> : <AuthScreens/>
}