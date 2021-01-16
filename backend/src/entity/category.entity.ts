import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { CategoryUserEntity } from "./categoryUser.entity";

@Entity({ name: "category" })

export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: String;

    @OneToMany(type => CategoryUserEntity, categorys => categorys.categorys, { onDelete: "CASCADE" })
    categorys : CategoryUserEntity[];
}