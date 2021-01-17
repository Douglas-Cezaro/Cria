import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #f7f4f7;
`;
export const Headertitle = styled.View`
  align-items : center;
  background-color: #f7f4f7;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #7e8389;
  margin-top: 40px;
  font-weight: bold;
`;

export const ProfileBody = styled.View`
  height: 100px;
  flex-direction: row;
  margin-top: 10px;
`;

export const ProfileDescription = styled.View`
  font-size: 25px;
  color: #7e8389;
  margin-top: 5px;
  margin-left: 15px;
`;

export const ProfileTitle = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

export const ProfileDesc = styled.Text`
  font-size: 15px;
  color: #7e8389;
`;

export const ProfileImg = styled.Image`
  height: 80px;
  width: 80px;
  border-width: 2px;
  border-radius: 50px;
`;

export const CardScore = styled.TouchableOpacity`
  height: 200px;
  background-color: #fd5555;
  border-radius: 20px;
`;

export const GroupNumbers = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardNivelGroup = styled.View`
  align-items: center;
  margin-left: 20px;
`;

export const CardNivel = styled.Text`
  font-size: 100px;
  font-weight: bold;
  color: #fff;
`;

export const CardNivelDesc = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const CardSeparator = styled.View`
  width: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 25px;
  background-color: #fff;
  border-radius: 10px;
`;

export const CardScoreGroup = styled.View`
  /* padding-top : 50px; */
  margin-left: 25px;
`;

export const CardScore2 = styled.Text`
  font-size: 70px;
  font-weight: bold;
  color: #fff;
`;

export const CardNivelDesc2 = styled.Text`
  margin-top: 50px;
  color: #fff;
  font-size: 20px;
`;

export const GroupScoreDesc = styled.View`
  flex-direction: row;
`;

export const Progress = styled.View`
  background-color: #fff;
  /* background-color : green; */
  height: 50px;
  width: 100%;
  /* border-radius: 20px; */
`;
export const GroupBarras = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Barra = styled.View`
  background-color: #fd5555;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  height: 15px;
  border-radius: 50px;
  border: 1px;
  border-color: #d9d9d9;
  opacity: 0.1;
`;

export const Barra2 = styled.View`
  background-color: #fd5555;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 0px;
  height: 15px;
  border-radius: 50px;
  border: 1px;
  border-color: #d9d9d9;
`;
export const CardSelectGroup = styled.View`
  background-color: white;
  flex: 1;
  min-height: 500px;
`;

export const CardSelectItem = styled.TouchableOpacity`
  height: 155px;
  width: 170px;
  border-width: 0px;
  border-radius: 20px;
  background-color: #fd5555;
  margin-bottom: 10px;
  align-items: center;
`;

export const TitleCardSelec = styled.Text`
  padding-top: 120px;
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;

export const CardSecoreIcon = styled.View`
  margin-left: 280px;
  bottom: 180px;
`;

export const GroupSpace = styled.View`
  padding: 20px;
`;

export const Styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    borderWidth: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 13,
    zIndex: 10,
    margin: 8,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 0,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
