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
  CardOptionTitle,
  GroupSpace,
  Styles,
  GroupRanking,
  RankingHead,
  RankTitle,
  GroupHead,
  LineSeparator,
  GroupTitle,
  ProfileBody,
  ProfileImg,
  GroupTitle2,
  GroupTitle3,
  GroupHeadTitle,
  Scroller,
} from "./styles";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const profileImg = require("../../../assets/1400x900.png");

export default function School() {
  const navigation = useNavigation();

  const handleEntrepreneur = () => {
    navigation.navigate("Entrepreneur");
  };

  const handleCulture = () => {
    navigation.navigate("Culture");
  };

  const handleSport = () => {
    navigation.navigate("Sport");
  };

  return (
    <Container>
      <GroupSpace>
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
          <CardOptionItem onPress={handleCulture}>
            <CardOptionIcon>
              <FontAwesome5 name="theater-masks" size={50} color="#FFF" />
            </CardOptionIcon>
            <CardOptionTitle>Cultura</CardOptionTitle>
          </CardOptionItem>

          <CardOptionItem onPress={handleSport}>
            <CardOptionIcon>
              <FontAwesome name="soccer-ball-o" size={50} color="#FFF" />
            </CardOptionIcon>
            <CardOptionTitle>Esporte</CardOptionTitle>
          </CardOptionItem>

          <CardOptionItem onPress={handleEntrepreneur}>
            <CardOptionIcon>
              <MaterialCommunityIcons name="finance" size={50} color="#FFF" />
            </CardOptionIcon>
            <CardOptionTitle>Empreendedor</CardOptionTitle>
          </CardOptionItem>
        </CardOptionGroup>
      </GroupSpace>

      <GroupRanking style={Styles.containerStyle}>
        <RankingHead>
          <RankTitle>Ranking</RankTitle>
        </RankingHead>

        <GroupHeadTitle>
          <GroupTitle>Posição</GroupTitle>
          <GroupTitle></GroupTitle>
          <GroupTitle>Nome</GroupTitle>
          <GroupTitle></GroupTitle>
          <GroupTitle>Nvl</GroupTitle>
          <GroupTitle>Pts.</GroupTitle>
        </GroupHeadTitle>

        <LineSeparator></LineSeparator>
        <Scroller>
          <GroupHead>
            <GroupTitle2>1</GroupTitle2>
            <ProfileBody>
              <ProfileImg source={profileImg} />
            </ProfileBody>
            <GroupTitle2>Hellen Aríane</GroupTitle2>
            <GroupTitle3>2</GroupTitle3>
            <GroupTitle2>201</GroupTitle2>
          </GroupHead>

          <GroupHead>
            <GroupTitle2>1</GroupTitle2>
            <ProfileBody>
              <ProfileImg source={profileImg} />
            </ProfileBody>
            <GroupTitle2>Hellen Aríane</GroupTitle2>
            <GroupTitle3>2</GroupTitle3>
            <GroupTitle2>188</GroupTitle2>
          </GroupHead>
          <GroupHead>
            <GroupTitle2>1</GroupTitle2>
            <ProfileBody>
              <ProfileImg source={profileImg} />
            </ProfileBody>
            <GroupTitle2>Hellen Aríane</GroupTitle2>
            <GroupTitle3>2</GroupTitle3>
            <GroupTitle2>170</GroupTitle2>
          </GroupHead>
          <GroupHead>
            <GroupTitle2>1</GroupTitle2>
            <ProfileBody>
              <ProfileImg source={profileImg} />
            </ProfileBody>
            <GroupTitle2>Hellen Aríane</GroupTitle2>
            <GroupTitle3>2</GroupTitle3>
            <GroupTitle2>160</GroupTitle2>
          </GroupHead>
        </Scroller>
      </GroupRanking>
    </Container>
  );
}
