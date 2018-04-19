import { PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export abstract class Entity<T> {
    @PrimaryGeneratedColumn()
    Id: T;
}

export abstract class NamedEntity<T> extends Entity<T> {
    @Column({ nullable: false })
    Nombre: string;
}

export abstract class CreatedEntity<T> extends Entity<T> {
    @CreateDateColumn()
    FechaCreacion: Date;
}