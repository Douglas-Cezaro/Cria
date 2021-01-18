import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Alert, BackHandler, StyleSheet, TouchableOpacity } from "react-native";

const TabArea = styled.View`
  height: 60px;
  background-color: #fff;
  flex-direction: row;
`;

export const styles = StyleSheet.create({
  TabItemCenter: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: "#fd5555",
    marginTop: -20,
    marginRight: 10,
    marginLeft: 10,
  },
  TabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabIcon: {
    color: "#FFF",
  },
});

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  useEffect(() => {
    const backAction = () => {
      Alert.alert("", "Quer realmente fechar o aplicativo", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <TabArea>
      <TouchableOpacity
        onPress={() => goTo("School")}
        style={[state.index === 0 ? styles.TabItemCenter : styles.TabItem]}
      >
        <Ionicons
          name="school-sharp"
          size={24}
          color="black"
          style={[state.index === 0 && styles.tabIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goTo("Profile")}
        style={[state.index === 1 ? styles.TabItemCenter : styles.TabItem]}
      >
        <FontAwesome5
          name="user"
          size={24}
          color="black"
          style={[state.index === 1 && styles.tabIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goTo("Store")}
        style={[state.index === 2 ? styles.TabItemCenter : styles.TabItem]}
      >
        <FontAwesome5
          name="store-alt"
          size={24}
          color="black"
          style={[state.index === 2 && styles.tabIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goTo("Bank")}
        style={[state.index === 3 ? styles.TabItemCenter : styles.TabItem]}
      >
        <MaterialIcons
          name="attach-money"
          size={24}
          color="black"
          style={[state.index === 3 && styles.tabIcon]}
        />
      </TouchableOpacity>
    </TabArea>
  );
};
