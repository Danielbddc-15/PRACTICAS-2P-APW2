import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Gasto } from '../../Gasto/entities/gasto.entity'; // Ajusta la ruta según la ubicación de tu entidad Gasto

@Entity({ name: 'clientes' })
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @Column('text')
  cedula: string;

  @OneToMany(() => Gasto, (gasto) => gasto.cliente, { cascade: true })
  gastos: Gasto[]; // Nota: Plural para mantener la consistencia
}
