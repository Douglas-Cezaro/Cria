import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
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

export const LogoView = styled.View`
  flex: 1;
  top: 60px;
  text-align: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 600px;
  width: 100%;
`;

export const ViewInput = styled.View`
  flex: 1;
  top: 50px;
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
  height: 300px;
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

export const styles = StyleSheet.create({
  logo: {
    height: 400,
    width: "75%",
  },
});

export const ViewConfirmeButton = styled.View`
  bottom: 30px;
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
