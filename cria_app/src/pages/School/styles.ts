import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #f7f4f7;
`;

export const Headertitle = styled.View`
  align-items : center;
  background-color: #f7f4f7;
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

export const GroupSpace = styled.View`
  padding : 20px;
`;

export const GroupRanking = styled.View`
  background-color: white;
`;

export const RankingHead = styled.View`
  align-items : center;
  padding : 5px;
`;

export const RankTitle = styled.Text`
  font-size: 20px;
  color: #7e8389;
`;

export const GroupHead = styled.View`
  flex-direction : row;
  justify-content : space-between;
  height : 50px;
`;

export const GroupHeadTitle = styled.View`
  flex-direction : row;
  justify-content : space-between;
`;

export const GroupTitle = styled.Text`
  font-size: 15px;
  color: #7e8389;
`;

export const GroupTitle2 = styled.Text`
  color: #7e8389;
`;

export const GroupTitle3 = styled.Text`
  color: #fd5555;
`;

export const LineSeparator = styled.View`
  background-color : #7e8389;
  height : 1px;
  margin-top : 10px;
  margin-bottom : 20px;
`;

export const ProfileBody = styled.View`
  height : 100px;
  flex-direction : row;
`;

export const ProfileImg = styled.Image`
  height : 30px;
  width: 30px;
  border-radius: 50px;
`;

export const Scroller = styled.ScrollView`
  
`;

export const Styles = StyleSheet.create({
  containerStyle: {
    /* flexDirection: "row",
    flexWrap: "wrap", */
    justifyContent: "space-between",
    borderWidth: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 13,
    zIndex: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 120,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});