import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding : 20px
`;
export const Headertitle = styled.View`
  align-items : center;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #7e8389;
  margin-top :40px;
`;

export const ProfileBody = styled.View`
  height : 100px;
  flex-direction : row;
  margin-top: 10px
`;

export const ProfileDescription = styled.View`
  font-size: 25px;
  color: #7e8389;
  margin-top : 5px;
  margin-left: 15px;
`;

export const ProfileTitle = styled.Text`
  font-size: 18px;
  color : black;
  font-weight: bold;
`;

export const ProfileDesc = styled.Text`
  font-size: 15px;
  color: #7e8389;
`;

export const ProfileImg = styled.Image`
  height : 80px;
  width: 80px;
  border-width: 2px;
  border-radius: 50px;
`;

export const CardScore = styled.View`
    height : 200px;
    background-color: #fd5555;
    border-radius: 20px;
`;

export const GroupNumbers = styled.View`
  flex-direction : row;
  flex-wrap : wrap;
`;

export const CardNivelGroup = styled.View`
  align-items : center;
  margin-left : 20px;
`;

export const CardNivel = styled.Text`
  font-size: 100px;
  font-weight: bold;
  color : #FFF;
`;

export const CardNivelDesc = styled.Text`
  color : #FFF;
  font-size: 20px;
`;

export const CardSeparator = styled.View`
  width: 1px;
  margin-top : 20px;
  margin-bottom : 20px;
  margin-left : 25px;
  background-color : #FFF;
  border-radius : 10px;
`;

export const CardScoreGroup = styled.View`
  padding-top : 50px;
  margin-left : 25px;
`;

export const CardScore2 = styled.Text`
  font-size: 70px;
  font-weight: bold;
  color : #FFF;
`;

export const CardNivelDesc2 = styled.Text`
  margin-top: 50px;
  color : #FFF;
  font-size: 20px;
`;

export const GroupScoreDesc = styled.View`
  flex-direction : row;
`;

export const Progress = styled.View`
  background-color : #FFF;
  /* background-color : green; */
  height : 50px;
  width: 100%;
  /* border-radius: 20px; */
`;
export const GroupBarras = styled.View`
flex-direction : row;
  flex-wrap : wrap;
`

export const Barra = styled.View`
  background-color : #fd5555;
   margin-left : 5px;
  margin-right : 5px;
  margin-top : 5px;
  height : 15px;
  border-radius : 50px;
  border : 1px;
  border-color : #D9D9D9;
  opacity : 0.1; 
`;

export const Barra2 = styled.View`
  background-color : #fd5555;
  margin-left : 5px;
  margin-right : 5px;
  margin-top : 0px;
  height : 15px;
  border-radius : 50px;
  border : 1px;
  border-color : #D9D9D9;
`; 
export const CardSelectGroup = styled.View`
  flex: 1;
  flex-direction : row;
  flex-wrap : wrap;
  justify-content : space-between;
  margin-top: 10px;
`;

export const CardSelectItem = styled.View`
    height : 155px;
    width: 170px;
    border-width: 0px;
    border-radius: 20px;
    background-color : #fd5555;
    margin-bottom : 10px;
    align-items : center;
`;

export const TitleCardSelec = styled.Text`
  padding-top : 120px;
  font-size: 15px;
  color : #FFF;
  font-weight: bold;
`;
