import React, { useEffect, useState } from "react";
import {
  BackButton,
  ConfirmeButton,
  Container,
  HeaderArea,
  HeaderTitle,
  Input,
  InputLabel,
  Logo,
  LogoView,
  Scroller,
  ViewConfirmeButton,
  ViewInput,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const logo = require("../../../assets/1400x900.png");
import { Keyboard } from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "../CheckCode/styles";
import { ConfirmeText } from "../ProfileData/styles";
export default function PasswordUser() {
  const navigation = useNavigation();
  const [close, setClose] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    navigation.navigate("SelectionCategory");
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setClose(true);
  };

  const _keyboardDidHide = () => {
    setClose(false);
  };

  return (
    <Container>
      <HeaderArea>
        <BackButton onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={50} color="#7E8389" />
        </BackButton>
        <HeaderTitle>Criar uma senha</HeaderTitle>
      </HeaderArea>
      <Scroller>
        <LogoView>
          {!close && (
            <Animatable.Image
              style={styles.logo}
              animation="fadeInUp"
              useNativeDriver
              source={logo}
            />
          )}
        </LogoView>
        <ViewInput>
          <InputLabel>Senha *</InputLabel>
          <Input />
          <InputLabel>Confirmar Senha *</InputLabel>
          <Input />
        </ViewInput>
      </Scroller>
      <ViewConfirmeButton>
        <ConfirmeButton onPress={handleSubmit}>
          <ConfirmeText>Pronto!!</ConfirmeText>
        </ConfirmeButton>
      </ViewConfirmeButton>
    </Container>
  );
}
