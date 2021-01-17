import { Entity, Column, PrimaryGeneratedColumn, Double, ManyToOne } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity("curse")

export class CurseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column()
    name: string;

    @Column()
    duration: string;
  
    @Column()
    reward: number;
  
    @Column( {type : "double"})
    value:  number;

    @ManyToOne(type => CategoryEntity, { onDelete: "CASCADE" })
    category: CategoryEntity;
}