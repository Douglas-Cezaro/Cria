import React from "react";
import styled from "styled-components/native";

export const Scroller = styled.ScrollView`
  flex: 1;
  background-color: #f7f4f7;
`;

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
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  padding-right: 10px;
  height: 50px;
  color: #7e8389;
`;

export const CardBody = styled.TouchableOpacity`
  height: 60px;
  top: 20px;
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
export const CardSubtitle = styled.Text`
  margin-left: 40px;
  bottom: 10px;
  color: #7e8389;
`;
export const CardDistance = styled.View`
  align-items: flex-end;
  bottom: 30px;
  margin-right: 10px;
`;
export const CardDistanceText = styled.Text`
  color: #7e8389;
`;
export const CardSeparator = styled.View`
  height: 1px;
  margin-top: 40px;
  margin-bottom: 20px;
  background-color: #000;
  border-radius: 10px;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: white;
  background-color: #fd5555;
`;

export const RoutesContainer = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RouteText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const AreaAtalhos = styled.View`
  flex: 1;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const AtalhoItem = styled.TouchableOpacity`
  height: 110px;
  width: 110px;
  border-radius: 10px;
  background-color: #fd5555;
  align-items: center;
  justify-content: center;
`;

export const AtalhoTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
