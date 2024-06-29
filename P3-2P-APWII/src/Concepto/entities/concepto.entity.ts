import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Gasto } from '../../Gasto/entities/gasto.entity'; // Asegúrate de que la ruta es correcta

@Entity({ name: 'conceptos' })
export class Concepto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  descripcion: string;

  @Column({ default: 'Activo' })
  estado: string;

  @OneToMany(() => Gasto, (gasto) => gasto.concepto, { cascade: true })
  gastos: Gasto[]; // Plural para mantener la consistencia
}
