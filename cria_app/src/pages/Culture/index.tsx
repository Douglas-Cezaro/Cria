import React, { useEffect, useState } from "react";
import {
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import {
  Container,
  HeaderArea,
  HeaderTitle,
  MarketArea,
  MarketInput,
  MarkerFinder,
  Options,
  OptionsBoby,
  OptionsTitle,
  Card,
  CardBody,
  CardSeparator,
  CardTitle,
  CardSubtitle,
  CardDistance,
  CardDistanceText,
  CardImage,
  CardAreaTitle,
  BackButton,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Search {
  id: number;
  description: string;
}

export default function Culture() {
  const [search, setSearch] = useState("");
  const [arraySearch, setArraySearch] = useState<Search[]>([]);
  const navigation = useNavigation();

  const addSearch = () => {
    const id = Math.random() * 10;
    const data = {
      id: id,
      description: search,
    };
    setArraySearch((previous) => [...previous, data]);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const removeSearch = (search) => {
    const find = arraySearch.filter((r) => r.id !== search.id);
    setArraySearch(find);
  };

  return (
    <Container>
      <HeaderArea>
        <BackButton onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={50} color="#7E8389" />
        </BackButton>
        <HeaderTitle>Cultura</HeaderTitle>
      </HeaderArea>
      <MarketArea>
        <MarketInput
          placeholder="Procure por palavras chaves"
          placeholderTextColor="#7e8389"
          value={search}
          onChangeText={(t) => setSearch(t)}
        />
        <MarkerFinder onPress={addSearch}>
          <FontAwesome name="search" size={24} color="#7e8389" />
        </MarkerFinder>
      </MarketArea>
      <Options>
        {arraySearch.map((search) => (
          <OptionsBoby key={search.id} onPress={() => removeSearch(search)}>
            <OptionsTitle>{search.description}</OptionsTitle>
            <AntDesign
              name="closecircle"
              size={15}
              color="white"
              style={{ margin: 3 }}
            />
          </OptionsBoby>
        ))}
      </Options>
      <Card>
        <CardBody>
          <CardImage>
            <FontAwesome5 name="store" size={24} color="#fd5555" />
          </CardImage>

          <CardTitle>Educação Financeira Sebrae</CardTitle>
          <CardAreaTitle>
            <CardSubtitle>Duração 2h</CardSubtitle>
            <CardSubtitle>Duração 2h</CardSubtitle>
          </CardAreaTitle>

          <CardDistance>
            <CardDistanceText>C$ 0,00</CardDistanceText>
          </CardDistance>
        </CardBody>
        <CardSeparator />
        {/* {stores.map((store) => (
          <>
            <CardBody key={store.id} onPress={() => handleDetails(store)}>
              <CardImage>
                <FontAwesome5 name="store" size={24} color="#fd5555" />
              </CardImage>

              <CardTitle>{store.name}</CardTitle>
              <CardSubtitle>{store.description}</CardSubtitle>
              <CardDistance>
                <CardDistanceText>200 m</CardDistanceText>
              </CardDistance>
            </CardBody>
            <CardSeparator />
          </>
        ))} */}
      </Card>
    </Container>
  );
}
