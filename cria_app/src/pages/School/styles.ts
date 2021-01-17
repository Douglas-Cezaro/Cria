import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding : 20px;
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

export const CardProduct = styled.View`
  height : 100px;
  border-radius: 20px;
  border: 2px;
  border-color : #ddd;  
  margin-top : 10px;
`;

export const CardProductTitle = styled.Text`
  margin-left : 20px;
  margin-top : 10px;
  color :  #fd5555;
  font-size: 16px;
  font-weight: bold;
`;

export const CardOptionGroup = styled.View`
  flex: 1;
  flex-direction : row;
  flex-wrap : wrap;
  justify-content : space-between;
  margin-top : 10px;
`;

export const CardOptionItem = styled.TouchableOpacity`
  height : 120px;
  width : 120px;
  border-radius : 20px;
  background-color : #fd5555;
  align-items : center;
`;

export const CardOptionIcon = styled.View`
  padding-top : 15px;
`;

export const CardOptionTitle = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 15px;
  margin-top : 10px
`;