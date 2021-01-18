import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import {
  Ionicons,
  FontAwesome5,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

import MapView, { Marker } from "react-native-maps";

import {
  AreaAtalhos,
  AtalhoItem,
  AtalhoTitle,
  BackButton,
  CardBody,
  CardDistance,
  CardDistanceText,
  CardImage,
  CardSeparator,
  CardSubtitle,
  CardTitle,
  DetailsContainer,
  HeaderArea,
  HeaderTitle,
  MapContainer,
  RoutesContainer,
  RouteText,
  Scroller,
} from "./styles";
const StoreIcon = require("../../../assets/store.png");

interface Store {}

interface StoreDetailsRouteParams {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

export default function StoreDetails() {
  const route = useRoute();
  const params = route.params as StoreDetailsRouteParams;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  function handlerOpenGoogleMapRoutes() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${params.latitude},${params.longitude} `
    );
  }

  if (!params) {
    return (
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}
      >
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <Scroller>
      <DetailsContainer>
        <HeaderArea>
          <BackButton onPress={handleGoBack}>
            <Ionicons name="arrow-back-outline" size={50} color="#7E8389" />
          </BackButton>
          <HeaderTitle>Comércios</HeaderTitle>
        </HeaderArea>
        <CardBody>
          <CardImage>
            <FontAwesome5 name="store" size={24} color="#fd5555" />
          </CardImage>
          <CardTitle>{params.name}</CardTitle>
          <CardSubtitle>{params.description}</CardSubtitle>
          <CardDistance>
            <CardDistanceText>200 m</CardDistanceText>
          </CardDistance>
        </CardBody>
        <CardSeparator />

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: params.latitude,
              longitude: params.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            zoomTapEnabled
            zoomEnabled={true}
            pitchEnabled={false}
            scrollEnabled={true}
            rotateEnabled={false}
            style={{
              width: "100%",
              height: 350,
            }}
          >
            <Marker
              icon={StoreIcon}
              coordinate={{
                latitude: params.latitude,
                longitude: params.longitude,
              }}
            />
          </MapView>

          <RoutesContainer onPress={handlerOpenGoogleMapRoutes}>
            <RouteText>Ver rotas no Google Maps</RouteText>
          </RoutesContainer>
        </MapContainer>
      </DetailsContainer>
      <AreaAtalhos>
        <AtalhoItem>
          <Feather name="activity" size={50} color="white" />
          <AtalhoTitle>Atividades Próximas</AtalhoTitle>
        </AtalhoItem>
        <AtalhoItem>
          <MaterialIcons name="receipt" size={50} color="white" />
          <AtalhoTitle>Vouchers</AtalhoTitle>
        </AtalhoItem>
        <AtalhoItem>
          <MaterialIcons name="work" size={50} color="white" />
          <AtalhoTitle>Vagas</AtalhoTitle>
        </AtalhoItem>
      </AreaAtalhos>
    </Scroller>
  );
}
const styles = StyleSheet.create({
  mapStyle: {
    width: "100%",
    height: 450,
  },
});
