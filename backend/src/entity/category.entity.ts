import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { CategoryUserEntity } from "./categoryUser.entity";
import { CurseEntity } from "./curse.entity";

@Entity({ name: "category" })

export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: String;

    @Column()
    urlimg: String;

    @OneToMany(type => CategoryUserEntity, categorys => categorys.categorys, { onDelete: "CASCADE" })
    categorys : CategoryUserEntity[];

    @OneToMany(type => CurseEntity, curse => curse.category, { onDelete: "CASCADE" })
    category : CategoryUserEntity[];
}