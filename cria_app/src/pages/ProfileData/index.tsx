import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Scroller,
  HeaderArea,
  BackButton,
  HeaderTitle,
  ViewInput,
  Container,
  InputLabel,
  Input,
  ViewConfirmeButton,
  ConfirmeButton,
  ConfirmeText,
  TextError,
  ButtonError,
} from "../ProfileData/styles";
import { Alert, Keyboard } from "react-native";
export default function CheckCode() {
  const navigation = useNavigation();
  const [close, setClose] = useState(false);
  const [disable, setDisible] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    Alert.alert("", "Os dados estão todos corretos?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
      { text: "SIM", onPress: () => navigation.navigate("PasswordUser") },
    ]);
    return true;
  };

  const handleDisible = () => {
    setDisible(true);
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
      {!close && (
        <HeaderArea>
          <BackButton onPress={handleGoBack}>
            <Ionicons name="arrow-back-outline" size={50} color="#7E8389" />
          </BackButton>
          <HeaderTitle>Confirme seus Dados</HeaderTitle>
        </HeaderArea>
      )}
      <Scroller contentContainerStyle={{ padding: 24 }}>
        <ViewInput>
          <InputLabel>Nome Completo</InputLabel>
          <Input editable={disable} value="Nome Completo" />
          <InputLabel>CPF</InputLabel>
          <Input editable={disable} value="CPF" />
          <InputLabel>Registro Escolar</InputLabel>
          <Input editable={disable} value="Escolar" />
          <InputLabel>Idade</InputLabel>
          <Input editable={disable} value="Idade" />
          <InputLabel>E-mail</InputLabel>
          <Input editable={disable} value="E-mail" />
        </ViewInput>
      </Scroller>
      <ViewConfirmeButton>
        <ConfirmeButton onPress={handleSubmit}>
          <ConfirmeText>Tudo Certo!!</ConfirmeText>
        </ConfirmeButton>
      </ViewConfirmeButton>
      <ButtonError onPress={handleDisible}>
        <TextError>Tem Algo de Errado</TextError>
      </ButtonError>
    </Container>
  );
}
