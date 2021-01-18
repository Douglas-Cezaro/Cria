import React from "react";
import {
  ConfirmeButton,
  Container,
  FakeSwiper,
  SwipeDot,
  SwipeDotActive,
  SwipeImage,
  SwipeItem,
  ViewConfirmeButton,
  ConfirmeText,
  HeaderArea,
  BackButton,
  HeaderTitle,
  SwipeTitle,
} from "./styles";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Alert, BackHandler } from "react-native";

export default function CheckCode() {
  const navigation = useNavigation();

  const handleCheckCode = () => {
    navigation.navigate("CheckCode");
  };

  const handleGoBack = () => {
    Alert.alert("", "Quer mesmo sair do aplicativo?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
      { text: "SIM", onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  const userInfo = {
    photos: [
      { name: "Jovem", url: require("../../../assets/profile.png") },
      { name: "Comercio", url: require("../../../assets/profile.png") },
      { name: "Escola", url: require("../../../assets/profile.png") },
    ],
  };
  return (
    <Container>
      <HeaderArea>
        <BackButton onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={50} color="#7E8389" />
        </BackButton>
        <HeaderTitle>Escolha seu perfil</HeaderTitle>
      </HeaderArea>
      {userInfo.photos && userInfo.photos.length > 0 ? (
        <Swiper
          style={{
            height: 450,
            top: 100,
            left: 15,
          }}
          dot={<SwipeDot />}
          activeDot={<SwipeDotActive />}
          on
          paginationStyle={{
            top: 450,
            textAlign: "center",
          }}
          // autoplay={true}
        >
          {userInfo.photos.map((item, key) => (
            <SwipeItem key={key}>
              <SwipeTitle>{item.name}</SwipeTitle>
              <SwipeImage source={item.url} />
            </SwipeItem>
          ))}
        </Swiper>
      ) : (
        <FakeSwiper></FakeSwiper>
      )}
      <ViewConfirmeButton>
        <ConfirmeButton onPress={handleCheckCode}>
          <ConfirmeText>Pronto!!</ConfirmeText>
        </ConfirmeButton>
      </ViewConfirmeButton>
    </Container>
  );
}
