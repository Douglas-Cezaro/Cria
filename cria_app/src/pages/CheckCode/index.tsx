import React, { useEffect, useState } from "react";
import {
  ConfirmeButton,
  ConfirmeText,
  Container,
  HeaderArea,
  HeaderSubArea,
  HeaderSubTitle,
  HeaderTitle,
  BackButton,
  ViewConfirmeButton,
  styles,
  LogoView,
  InputView,
  Input,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const logo = require("../../../assets/profile.png");
import { Keyboard } from "react-native";
import * as Animatable from "react-native-animatable";

export default function CheckCode() {
  const navigation = useNavigation();
  const [close, setClose] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate("ProfileData");
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
        <HeaderTitle>Digite seu código</HeaderTitle>
      </HeaderArea>
      <HeaderSubArea>
        <HeaderSubTitle>
          Você conseguirá seu código na secretaria da sua escola!! Vá até lá e
          peça ele!! Estamos te esperando!!
        </HeaderSubTitle>
      </HeaderSubArea>
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

      <InputView>
        <Input maxLength={1} returnKeyType="next"></Input>
        <Input maxLength={1} returnKeyType="next"></Input>
        <Input maxLength={1} returnKeyType="next"></Input>
        <Input maxLength={1} returnKeyType="next"></Input>
        <Input maxLength={1} returnKeyType="next"></Input>
        <Input maxLength={1} returnKeyType="next"></Input>
      </InputView>
      <ViewConfirmeButton>
        <ConfirmeButton onPress={handleNext}>
          <ConfirmeText>Pronto!!</ConfirmeText>
        </ConfirmeButton>
      </ViewConfirmeButton>
    </Container>
  );
}
