import React from "react";
import CardItem from "./cardItem";
import { CardBody } from "./styles";

interface Category {
    id: number;
    name: string;
}

type Props = {
    categorys: Category[];
    onSelectCategory: (category: Category) => void;
    selectedCategorys: Category[];
};
function checkIsSelected(selectedCategorys: Category[], category: Category) {
    return selectedCategorys.some((item) => item.id === category.id);
}
export default function CategoryList({ categorys, onSelectCategory, selectedCategorys }: Props) {
    return (
        <CardBody>
            {
                categorys.map((category) => (
                    <CardItem
                        key={category.id}
                        category={category}
                        onSelectCategory={onSelectCategory}
                        isSelected={checkIsSelected(selectedCategorys, category)}
                    />
                ))
            }
        </CardBody>
    );
}