import React from "react";
import { CardImage, CardLabel, CardItens, Styles } from "./styles";

const categoryImg = require("../../../assets/1400x900.png");

interface Category {
  id: number;
  name: string;
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
      />
    </CardItens>
  );
}
