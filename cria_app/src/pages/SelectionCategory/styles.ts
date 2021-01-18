import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";


export const Styles = StyleSheet.create({
  active: {
    opacity: 0.6,
  },
  inactive: {
    backgroundColor: '#7e8389',
    // borderWidth: 2,
    // borderRadius: 10,
  }
});

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
`;
export const HeaderArea = styled.View`
  top: 30px;
  flex-direction: row;
  height: 50px;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 22px;
  color: #7e8389;
`;

export const BackButton = styled.TouchableOpacity`
  padding-right: 10px;
  height: 50px;
  color: #7e8389;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  top : 50px;
`;

export const ViewConfirmeButton = styled.View`
  bottom: 40px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const ConfirmeButton = styled.TouchableOpacity`
  width: 300px;
  height: 60px;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #fd5555;
`;

export const ConfirmeText = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 20px;
`;

export const CardBody = styled.View`
  flex: 1;
  flex-direction : row;
  flex-wrap : wrap;
  justify-content : space-between;
`;

export const CardItens = styled.TouchableOpacity`
  align-items : center;
`;

export const CardLabel = styled.Text`
  color: #7e8389;
  margin-bottom: 2px;
  margin-top: 8px;
  font-size : 20px;
  font-weight : bold;
`;

export const CardImage = styled.View`
  height : 150px;
  width: 150px;
  border-width: 2px;
  border-radius: 10px;
`;

export const GroupIcons = styled.View`
  flex : 1;
  align-items : center;
   padding-top : 10px;
`;