import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from "typeorm";
import { CreatedEntity } from "../base";
import { ProjectType } from "../..";

@Entity()
export class Project extends CreatedEntity<number> {
    @Column({ length: 200 })
    Nombre: string;

    @Column("text")
    Descripcion: string;

    @Column({default: true})
    Activo: boolean;

    @Column({type: 'simple-array', nullable: true})
    Tags?: string[];

    @Column('int')
    Type: ProjectType;
}