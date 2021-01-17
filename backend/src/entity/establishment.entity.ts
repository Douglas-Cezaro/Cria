import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("establishments")
export class EstablishmentEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column("double")
  latitude: number;

  @Column("double")
  longitude: number;
}
