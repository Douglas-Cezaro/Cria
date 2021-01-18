import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f7f4f7;
  padding: 20px;
`;

export const Scroller = styled.ScrollView``;

export const HeaderArea = styled.View`
  top: 30px;
  flex-direction: row;
  height: 50px;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 25px;
  color: #7e8389;
`;

export const BackButton = styled.TouchableOpacity`
  padding-right: 10px;
  height: 50px;
  color: #7e8389;
`;

export const MarketArea = styled.View`
  background-color: #fff;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;
export const MarketInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #7e8389;
`;
export const MarkerFinder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;
export const Options = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: 8px;
  margin-right: 8px;
`;

export const OptionsBoby = styled.TouchableOpacity`
  background-color: #fd5555;
  margin-top: 20px;
  height: 30px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const OptionsTitle = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-right: 3px;
  margin-left: 2px;
`;

export const Card = styled.ScrollView`
  flex: 1;
  top: 20px;
  bottom: 100px;
  padding-bottom: 350px;
`;

export const CardBody = styled.TouchableOpacity`
  height: 40px;
  margin-bottom: 5px;
`;
export const CardImage = styled.View`
  align-items: flex-start;
  top: 30px;
  width: 40px;
  text-align: center;
  align-items: center;
`;
export const CardTitle = styled.Text`
  margin-left: 40px;
  bottom: 10px;
  font-weight: bold;
  color: #7e8389;
`;

export const CardAreaTitle = styled.View`
  flex-direction: row;
  bottom: 2px;
`;

export const CardSubtitle = styled.Text`
  margin-left: 40px;
  bottom: 10px;
  color: #7e8389;
`;
export const CardDistance = styled.View`
  align-items: flex-end;
  bottom: 50px;
  margin-right: 10px;
`;
export const CardDistanceText = styled.Text`
  color: #7e8389;
`;
export const CardSeparator = styled.View`
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #000;
  border-radius: 10px;
`;
