import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Cliente } from '../../Cliente/entities/cliente.entity';
import { Concepto } from '../../Concepto/entities/concepto.entity';

@ObjectType()
@Entity('gastos')
export class Gasto {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

 
  @ManyToOne(() => Cliente, (cliente) => cliente.gastos, { eager: true })
  @Field(() => Cliente)
  clienteid: Cliente;
  

  @ManyToOne(() => Concepto, (concepto) => concepto.gastos, { eager: true })
  @Field(() => Concepto)
  conceptoid: Concepto;

  @Field()
  @Column()
  fecha: string;

  @Field()
  @Column()
  hora: string;

  @Field()
  @Column({ type: 'float' })
  valorGasto: number;

  @Field()
  @Column({ default: 'Activo' })
  estado: string;
}
