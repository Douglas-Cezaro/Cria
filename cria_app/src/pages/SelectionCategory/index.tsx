import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  HeaderArea,
  BackButton,
  HeaderTitle,
  ViewConfirmeButton,
  ConfirmeButton,
  ConfirmeText,
  CardBody,
  Scroller
} from "../SelectionCategory/styles";
import { Alert, Text } from "react-native";
import { api } from "../../api";
import CategoryList from "./categoryList";
const categoryImg = require('../../../assets/1400x900.png');

interface Category {
  id: number;
  name: string;
}

export default function SelectionCategory() {
  const navigation = useNavigation();
  const [categorys, setCategorys] = useState<Category[]>([]);
  const [selectedCategorys, setSelectedCategorys] = useState<Category[]>([]);


  const handleGoBack = () => {
    navigation.goBack();
  };

  function checkIsSelected(selectedCategorys: Category[], category: Category) {
    return selectedCategorys.some((item) => item.id === category.id);
  }

  const handleSubmit = () => {
    console.log(selectedCategorys);
  }

  const handleSelectCategory = (category: Category) => {
    const isAlreadySelected = checkIsSelected(selectedCategorys, category);
    if (isAlreadySelected) {
      const selected = selectedCategorys.filter(
        (item) => item.id !== category.id
      );
      setSelectedCategorys(selected);
      
    } else {

      if(selectedCategorys.length <= 4){
        setSelectedCategorys((previous) => [...previous, category]);
      }else{
        Alert.alert("","Limite de categorias atingido!!")
      }
      
    }
  };

  useEffect(() => {
    api.get("categorys").then((resp) => {
      setCategorys(resp.data);
    }).catch((err) => { 
      console.log(err);
    })
  }, []);

  return (
    <Container>
      <HeaderArea>
        <BackButton onPress={handleGoBack}>
          <Ionicons name="arrow-back-outline" size={50} color="#7E8389" />
        </BackButton>
        <HeaderTitle>Escolha até 5 Categorias</HeaderTitle>
      </HeaderArea>
      <Scroller>
        <CategoryList
        categorys={categorys}
        onSelectCategory={handleSelectCategory}
        selectedCategorys={selectedCategorys}
        />
      </Scroller>

      <ViewConfirmeButton>
        <ConfirmeButton activeOpacity={selectedCategorys.length <= 4 ? 1 : 0.7} onPress={handleSubmit}>
          <ConfirmeText>Tudo Certo!! {selectedCategorys.length}</ConfirmeText>
        </ConfirmeButton> 
      </ViewConfirmeButton>
    </Container>
  );
} 
