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
  CardSelectGroup,
  CardSelectItem,
  TitleCardSelec

} from "./styles";

const profileImg = require("../../../assets/1400x900.png");

export default function Profile() {
  return (
    <Container>
      <Headertitle>
        <Title>Perfil</Title>
      </Headertitle>

      <ProfileBody>
        <ProfileImg source={profileImg} />
        <ProfileDescription>
          <ProfileTitle>
            Guilherme Emanuel Pires
          </ProfileTitle>
          <ProfileDesc>
            Faculdade Materdei
          </ProfileDesc>
          <ProfileDesc>
            23 Anos
          </ProfileDesc>
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
            <CardNivelDesc>Score:</CardNivelDesc>
            <GroupScoreDesc>
              <CardScore2>720</CardScore2>
              <CardNivelDesc2>/100 pontos</CardNivelDesc2>
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

      <CardSelectGroup>
        <CardSelectItem>
          <TitleCardSelec>Pesquisa</TitleCardSelec>
        </CardSelectItem>
        <CardSelectItem>
          <TitleCardSelec>Sala de Trofeus</TitleCardSelec>
        </CardSelectItem>
        <CardSelectItem>
          <TitleCardSelec>Perfil</TitleCardSelec>
        </CardSelectItem>
        <CardSelectItem>
          <TitleCardSelec>Currículo</TitleCardSelec>
        </CardSelectItem>
      </CardSelectGroup>


    </Container>

  );
}
