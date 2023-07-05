import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/app/Home";
import { SelectedItem } from "../screens/app/SelectedItem";
import { NewItem } from "../screens/app/NewItem";
import { Client } from "../screens/app/Client";
import { SelecteedClient } from "../screens/app/SelecteedClient";

const AppStack = createNativeStackNavigator();

export const AppScreens = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="client" component={Client} />
      <AppStack.Screen name="selectedclient" component={SelecteedClient} />
      <AppStack.Screen name="home" component={Home} />
      <AppStack.Screen name="selectedItem" component={SelectedItem} />
      <AppStack.Screen name="newItem" component={NewItem} />
    </AppStack.Navigator>
  )
}