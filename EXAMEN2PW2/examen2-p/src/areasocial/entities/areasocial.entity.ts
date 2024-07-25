// src/libro/entities/libro.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';

@ObjectType()
@Entity()
export class AreaSocial {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  Codigo: string;

  @Column()
  @Field()
  DetalleCondominio: string;

  @Column()
  @Field()
  clase: string;

  @Column()
  @Field()
  Responsable: string;

  @Column({ type: 'int' })
  @Field()
  ValorH: number;
  
  @Column()
  @Field()
  FechaUU: string;

  @Column()
  @Field()
  Empresa: string;

  @Column({ default: false })
  @Field()
  isDeleted: boolean; // Campo para eliminación lógica
}
