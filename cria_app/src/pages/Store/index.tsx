import React, { useEffect, useState } from "react";
import {
  FontAwesome,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
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
  AreaAtalhos,
  AtalhoItem,
  AtalhoTitle,
  Scroller,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../api";

interface Search {
  id: number;
  description: string;
}

interface Store {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
}

export default function Store() {
  const [search, setSearch] = useState("");
  const [arraySearch, setArraySearch] = useState<Search[]>([]);
  const navigation = useNavigation();
  const [stores, SetStores] = useState<Store[]>([]);

  useEffect(() => {
    api
      .get("establishments")
      .then((resp) => {
        SetStores(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [stores]);

  const addSearch = () => {
    const id = Math.random() * 10;
    const data = {
      id: id,
      description: search,
    };
    setArraySearch((previous) => [...previous, data]);
  };

  const handleDetails = (data) => {
    navigation.navigate("StoreDetails", data);
  };

  const removeSearch = (search) => {
    const find = arraySearch.filter((r) => r.id !== search.id);
    setArraySearch(find);
  };

  return (
    <Container>
      <HeaderArea>
        <HeaderTitle>Comércios</HeaderTitle>
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
        {stores.map((store) => (
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
        ))}
      </Card>
      <Scroller>
        <AreaAtalhos>
          <AtalhoItem>
            <MaterialCommunityIcons
              name="currency-usd"
              size={50}
              color="white"
            />
            <AtalhoTitle>Promoções</AtalhoTitle>
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
    </Container>
  );
}
