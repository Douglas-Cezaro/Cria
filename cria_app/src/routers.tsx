import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CheckCode from "./pages/CheckCode";
import ProfileData from "./pages/ProfileData";
import SelectProfile from "./pages/SelectProfile";
import PasswordUser from "./pages/PasswordUser";
import SelectionCategory from "./pages/SelectionCategory";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SelectProfile"
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#FFFF",
          },
        }}
      >
        <Stack.Screen name="SelectProfile" component={SelectProfile} />
        <Stack.Screen name="CheckCode" component={CheckCode} />
        <Stack.Screen name="ProfileData" component={ProfileData} />
        <Stack.Screen name="PasswordUser" component={PasswordUser} />
        <Stack.Screen name="SelectionCategory" component={SelectionCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
