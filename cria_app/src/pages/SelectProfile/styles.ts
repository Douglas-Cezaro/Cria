import React from "react";
import styled from "styled-components/native";

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
  font-size: 25px;
  color: #7e8389;
`;

export const BackButton = styled.TouchableOpacity`
  padding-right: 10px;
  height: 50px;
  color: #7e8389;
`;
export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  border-color: #fd5555;
  border-width: 1px;
  margin: 3px;
`;

export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: #fd5555;
  border-radius: 5px;
  border-color: #fd5555;
  margin: 3px;
`;

export const SwipeItem = styled.View`
  height: 440px;
  width: 340px;
`;

export const SwipeImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

export const FakeSwiper = styled.View`
  height: 200px;
  background-color: #63c2d1;
`;
export const ViewConfirmeButton = styled.View`
  bottom: 10px;
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
