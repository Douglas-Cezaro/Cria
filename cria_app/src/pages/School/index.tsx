import React from "react";
import {
  Container,
  Headertitle,
  Title,
  CardProduct,
  CardProductTitle,
  CardOptionGroup,
  CardOptionItem,
  CardOptionIcon,
  CardOptionTitle
} from "./styles";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function School() {
  return (
    <Container>
      <Headertitle>
        <Title>Escola</Title>
      </Headertitle>

      <CardProduct>
        <CardProductTitle>Minha Produção</CardProductTitle>
      </CardProduct>

      <CardProduct>
        <CardProductTitle>Minha Produção</CardProductTitle>
      </CardProduct>

      <CardOptionGroup>

        <CardOptionItem>
          <CardOptionIcon>
            <FontAwesome5 name="theater-masks" size={50} color="#FFF" />
          </CardOptionIcon>

          <CardOptionTitle>Cultura</CardOptionTitle>

        </CardOptionItem>

        <CardOptionItem>
          <CardOptionIcon>
            <FontAwesome name="soccer-ball-o" size={50} color="#FFF" />
          </CardOptionIcon>
          <CardOptionTitle>Esporte</CardOptionTitle>
        </CardOptionItem>

        <CardOptionItem>
          <CardOptionIcon>
            <MaterialCommunityIcons name="finance" size={50} color="#FFF" />
          </CardOptionIcon>
          <CardOptionTitle>Empreendedor</CardOptionTitle>
        </CardOptionItem>

      </CardOptionGroup>

    </Container>
  );
}
