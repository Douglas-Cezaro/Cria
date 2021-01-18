import React from "react";
import { Container, Logo } from "./styles";
import { useNavigation } from "@react-navigation/native";

const logo = require("../../../assets/logo.png");

export default function Preload() {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate("SelectProfile");
  }, 500);
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
