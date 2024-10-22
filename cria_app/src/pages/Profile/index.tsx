import React from "react";
import {
  Container,
  Title,
  Headertitle,
  ProfileBody,
  ProfileImg,
  ProfileDescription,
  ProfileTitle,
  ProfileDesc,
  CardScore,
  GroupNumbers,
  CardNivelGroup,
  CardNivel,
  CardNivelDesc,
  CardSeparator,
  CardScoreGroup,
  CardScore2,
  CardNivelDesc2,
  GroupScoreDesc,
  Progress,
  Barra,
  Barra2,
  GroupBarras,
  GroupSpace,
  CardSelectGroup,
  CardSelectItem,
  TitleCardSelec,
  CardSecoreIcon,
  Styles,
} from "./styles";

import {
  FontAwesome5,
  FontAwesome,
  Entypo,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
const profileImg = require("../../../assets/1400x900.png");

export default function Profile() {
  return (
    <Container>
      <GroupSpace>
        <Headertitle>
          <Title>Perfil</Title>
        </Headertitle>

        <ProfileBody>
          <ProfileImg source={profileImg} />
          <ProfileDescription>
            <ProfileTitle>Hellen Ariane</ProfileTitle>
            <ProfileDesc>Instituto Federal de Ouro Preto</ProfileDesc>
            <ProfileDesc>19 Anos</ProfileDesc>
          </ProfileDescription>
        </ProfileBody>

        <CardScore>
          <GroupNumbers>
            <CardNivelGroup>
              <CardNivel>2</CardNivel>
              <CardNivelDesc>Nível:</CardNivelDesc>
            </CardNivelGroup>

            <CardSeparator></CardSeparator>

            <CardScoreGroup>
              <CardSecoreIcon>
                <FontAwesome5 name="medal" size={50} color="#F2BB16" />
              </CardSecoreIcon>
              <CardNivelDesc>Score:</CardNivelDesc>
              <GroupScoreDesc>
                <CardScore2>720</CardScore2>
                <CardNivelDesc2>/1000 pontos</CardNivelDesc2>
              </GroupScoreDesc>
            </CardScoreGroup>
          </GroupNumbers>
          {/* <Progress>
          <GroupBarras>
            <Barra></Barra>
            <Barra2></Barra2>
          </GroupBarras>
        </Progress> */}
        </CardScore>
      </GroupSpace>

      <CardSelectGroup style={Styles.containerStyle}>
        <CardSelectItem>
          <FontAwesome name="search" size={50} color="white" />
          <TitleCardSelec>Pesquisa</TitleCardSelec>
        </CardSelectItem>
        <CardSelectItem>
          <Entypo name="trophy" size={50} color="white" />
          <TitleCardSelec>Sala de Trofeus</TitleCardSelec>
        </CardSelectItem>
        <CardSelectItem>
          <AntDesign name="user" size={50} color="white" />
          <TitleCardSelec>Perfil</TitleCardSelec>
        </CardSelectItem>
        <CardSelectItem>
          <Ionicons name="document-attach-outline" size={50} color="white" />
          <TitleCardSelec>Currículo</TitleCardSelec>
        </CardSelectItem>
      </CardSelectGroup>
    </Container>
  );
}
