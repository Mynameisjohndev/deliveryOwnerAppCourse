import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/app/Home";
import { SelectedItem } from "../screens/app/SelectedItem";

const AppStack = createNativeStackNavigator();

export const AppScreens = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="home" component={Home} />
      <AppStack.Screen name="selectedItem" component={SelectedItem} />
    </AppStack.Navigator>
  )
}