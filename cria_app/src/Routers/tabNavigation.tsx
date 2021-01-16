import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import School from "../pages/School";
import Profile from "../pages/Profile";
import Store from "../pages/Store";
import Bank from "../pages/Bank";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="School" component={School} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="Bank" component={Bank} />
    </Tab.Navigator>
  );
}
