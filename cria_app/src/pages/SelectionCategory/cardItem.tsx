import React from "react";
import { CardImage, CardLabel, CardItens, Styles, GroupIcons } from "./styles";

const categoryImg = require("../../../assets/1400x900.png");

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

interface Category {
  id: number;
  name: string;
  urlimg: String;
}

type Props = {
  category: Category;
  onSelectCategory: (category: Category) => void;
  isSelected: boolean;
};

export default function CardItem({
  category,
  onSelectCategory,
  isSelected,
}: Props) {
  return (
    <CardItens onPress={() => onSelectCategory(category)} isSelected>
      <CardLabel>{category.name}</CardLabel>
      <CardImage
        source={categoryImg}
        style={[isSelected ? Styles.active : Styles.inactive]}
      >
        <GroupIcons>
          {category.urlimg === "ios-musical-notes-outline" && (
            <Ionicons
              name="ios-musical-notes-outline"
              size={120}
              color="black"
            />
          )}

          {category.urlimg === "football-outline" && (
            <Ionicons name="football-outline" size={120} color="black" />
          )}

          {category.urlimg === "flower" && (
            <Ionicons name="flower" size={120} color="black" />
          )}

          {category.urlimg === "construct" && (
            <Ionicons name="construct" size={120} color="black" />
          )}

          {category.urlimg === "ios-calculator-sharp" && (
            <Ionicons name="ios-calculator-sharp" size={120} color="black" />
          )}

          {category.urlimg === "volleyball-ball" && (
            <FontAwesome5 name="volleyball-ball" size={120} color="black" />
          )}

          {category.urlimg === "movie-open" && (
            <MaterialCommunityIcons
              name="movie-open"
              size={120}
              color="black"
            />
          )}

          {category.urlimg === "book" && (
            <FontAwesome5 name="book" size={120} color="black" />
          )}

          {category.urlimg === "mouse-pointer" && (
            <Entypo name="mouse-pointer" size={120} color="black" />
          )}

          {category.urlimg === "basketball-ball" && (
            <FontAwesome5 name="basketball-ball" size={120} color="black" />
          )}

          {category.urlimg === "running" && (
            <FontAwesome5 name="running" size={120} color="black" />
          )}

          {category.urlimg === "" && (
            <FontAwesome name="question" size={120} color="black" />
          )}
        </GroupIcons>
      </CardImage>
    </CardItens>
  );
}
