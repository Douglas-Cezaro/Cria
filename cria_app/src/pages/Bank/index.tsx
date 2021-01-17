import React, { useEffect } from "react";
import {
  Container,
  HeaderArea,
  CardBody,
  HeaderTitle,
  ImageContent,
  ImageTitle,
  HeaderSubArea,
  HeaderSubTitle,
  SubTitle,
  AreaSubTitle,
  AreaAtalhos,
  AtalhoItem,
  AtalhoTitle,
} from "./styles";
import { FontAwesome5, MaterialIcons, Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
const chip = require("../../../assets/chip.png");

export default function Bank() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("");
  };

  return (
    <Container>
      <HeaderArea>
        <HeaderTitle>BANK</HeaderTitle>
      </HeaderArea>
      <HeaderSubArea>
        <HeaderSubTitle>Cria Coin</HeaderSubTitle>
      </HeaderSubArea>
      <CardBody>
        <ImageContent>
          <Image
            source={chip}
            style={{
              left: 20,
              top: 30,
              width: 60,
              height: 40,
            }}
          />
          <ImageTitle>CRIA</ImageTitle>
        </ImageContent>

        <View style={{ top: 110 }}>
          <Text
            style={{
              bottom: 90,
              left: 25,
              color: "white",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            ****     ****     ****     1245
          </Text>
          <Text
            style={{
              bottom: 90,
              left: 25,
              color: "white",
              fontSize: 15,
            }}
          >
            Hellen Ariane
          </Text>
          <Text
            style={{
              bottom: 90,
              left: 25,
              color: "white",
              fontSize: 12,
            }}
          >
            12.4545.4545
          </Text>
        </View>
        <View style={{ alignItems: "flex-end", bottom: 20 }}>
          <Text
            style={{
              right: 30,
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            R$ 12,45
          </Text>
        </View>
      </CardBody>
      <AreaSubTitle>
        <SubTitle>Atalhos Rapidos</SubTitle>
      </AreaSubTitle>
      <AreaAtalhos>
        <AtalhoItem>
          <FontAwesome5 name="clock" size={50} color="white" />
          <AtalhoTitle>Historico</AtalhoTitle>
        </AtalhoItem>
        <AtalhoItem>
          <MaterialIcons name="receipt" size={50} color="white" />
          <AtalhoTitle>Voucher</AtalhoTitle>
        </AtalhoItem>
        <AtalhoItem>
          <Fontisto name="arrow-swap" size={50} color="white" />
          <AtalhoTitle>Historico</AtalhoTitle>
        </AtalhoItem>
      </AreaAtalhos>
    </Container>
  );
}
