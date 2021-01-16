import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
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

export const HeaderSubArea = styled.View`
  top: 40px;
`;
export const HeaderSubTitle = styled.Text`
  width: 100%;
  font-size: 15px;
  color: #7e8389;
  padding-left: 10px;
`;

export const BackButton = styled.TouchableOpacity`
  padding-right: 10px;
  height: 50px;
  color: #7e8389;
`;

export const ConfirmeText = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 20px;
`;

export const LogoView = styled.View`
  flex: 1;
  top: 60px;
  text-align: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 400px;
  width: 75%;
`;
export const styles = StyleSheet.create({
  logo: {
    height: 400,
    width: "75%",
  },
});

export const InputView = styled.View`
  flex-direction: row;
  bottom: 30px;
  justify-content: center;
`;

export const Input = styled.TextInput`
  height: 60px;
  width: 60px;
  border-width: 2px;
  border-radius: 10px;
  margin-left: 2px;
  margin-right: 2px;
  border-color: #7e8389;
  text-align: center;
  font-weight: bold;
  color: #7e8389;
  font-size: 20px;
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
