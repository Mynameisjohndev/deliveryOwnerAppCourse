import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/app/Home";

const AppStack = createNativeStackNavigator();

export const AppScreens = () =>{
  return(
    <AppStack.Navigator>
      <AppStack.Screen name="home" component={ Home }  />
    </AppStack.Navigator>
  )
}