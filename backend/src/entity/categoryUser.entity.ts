import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { CategoryEntity } from "./category.entity";

@Entity({ name: "category_user" })

export class CategoryUserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => UserEntity, { onDelete: "CASCADE" })
    user: UserEntity;

    @ManyToOne(type => CategoryEntity, { onDelete: "CASCADE" })
    categorys: CategoryEntity;
}