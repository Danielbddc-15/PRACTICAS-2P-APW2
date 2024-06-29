import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Gasto } from '../../Gasto/entities/gasto.entity'; // Asegúrate de que la ruta es correcta

@ObjectType()
@Entity('conceptos')
export class Concepto {
 
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Field()
  @Column('text')
  descripcion: string;

  @Field()
  @Column({ default: 'Activo' })
  estado: string;

  @OneToMany(() => Gasto, (gasto) => gasto.conceptoid, { cascade: true })
  gastos: Gasto[]; // Plural para mantener la consistencia
}
