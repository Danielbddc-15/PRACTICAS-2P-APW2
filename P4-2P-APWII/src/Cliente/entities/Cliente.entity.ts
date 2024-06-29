import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Gasto } from '../../Gasto/entities/gasto.entity'; // Ajusta la ruta según la ubicación de tu entidad Gasto

@ObjectType()
@Entity('cliente')
export class Cliente {
  
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Field()
  @Column('text')
  nombre: string;

  @Field()
  @Column('text')
  cedula: string;
  
  @Column({ default: 'Activo' })
  @Field(() => String)
  estado: string;

  @OneToMany(() => Gasto, (gasto) => gasto.clienteid, { cascade: true })
  gastos: Gasto[];
}
