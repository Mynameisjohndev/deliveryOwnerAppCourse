import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/auth/Login";

const AuthStack = createNativeStackNavigator();

export const AuthScreens = () =>{
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name="login" component={ Login }  />
    </AuthStack.Navigator>
  )
}