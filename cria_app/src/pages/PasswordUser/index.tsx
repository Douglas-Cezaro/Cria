import React from "react";
import { Container } from "./styles";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function PasswordUser() {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity
        onPress={() => navigation.navigate("SelectionCategory")}
      >
        <Text>Pular</Text>
      </TouchableOpacity>
    </Container>
  );
}
