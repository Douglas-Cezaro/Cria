import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f7f4f7;
  padding: 20px;
`;
export const HeaderArea = styled.View`
  top: 30px;
  height: 50px;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 22px;
  color: #7e8389;
  font-weight: bold;
  text-align: center;
`;

export const HeaderSubArea = styled.View`
  top: 40px;
`;

export const HeaderSubTitle = styled.Text`
  width: 100%;
  font-size: 20px;
  color: #7e8389;
  padding-left: 10px;
`;
export const CardBody = styled.TouchableOpacity`
  background-color: #3f3f3f;
  top: 60px;
  border-radius: 10px;
  height: 200px;
`;

export const ImageContent = styled.View`
  flex: 1;
  left: 20px;
  flex-direction: row;
`;

export const ImageTitle = styled.Text`
  font-size: 20px;
  color: #fff;
  top: 30px;
  left: 200px;
`;

export const AreaSubTitle = styled.View`
  top: 80px;
  flex: 1;
`;

export const SubTitle = styled.Text`
  width: 100%;
  font-size: 20px;
  color: #7e8389;
  padding-left: 10px;
`;

export const AreaAtalhos = styled.View`
  flex: 1;
  bottom: 150px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
`;
