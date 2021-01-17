import React, { useEffect } from "react";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../components/Loading";
import { AsyncStorage } from "react-native";

export default function Preload() {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      //   if (token) {
      //     // let res = await Api.checkToken(token);
      //     if (res.token) {
      //       await AsyncStorage.setItem("token", res.token);
      //       navigation.reset({
      //         routes: [{ name: "MainTab" }],
      //       });
      //     } else {
      //       navigation.navigate("SignIn");
      //     }
      //   } else {
      //     navigation.navigate("SignIn");
      //   }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <Loading />
    </Container>
  );
}
