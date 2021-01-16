import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: #ffffff;
  padding-top: 10px;
  top: 10px;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;
export const HeaderArea = styled.View`
  top: 30px;
  flex-direction: row;
  height: 50px;
  align-items: center;
  padding-left: 20px;
`;

export const HeaderTitle = styled.Text`
  width: 300px;
  font-size: 25px;
  color: #7e8389;
`;

export const BackButton = styled.TouchableOpacity`
  padding-right: 10px;
  height: 50px;
  color: #7e8389;
`;

export const ViewInput = styled.View`
  flex: 1;
  top: 10px;
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
  height: 500px;
  bottom: 30px;
`;

export const InputLabel = styled.Text`
  color: #7e8389;
  margin-bottom: 2px;
  margin-top: 8px;
`;

export const Input = styled.TextInput`
  margin-top: 10px;
  height: 45px;
  border-radius: 10px;
  border-width: 2px;
  padding-left: 10px;
  font-weight: bold;
  border-color: #7e8389;
  color: #7e8389;
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

export const ButtonError = styled.TouchableOpacity`
  text-align: center;
  bottom: 30px;
  align-items: center;
`;

export const TextError = styled.Text`
  color: #fd8181;
  font-weight: bold;
`;
