import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from '../../Cliente/entities/Cliente.entity'; // Ajusta la ruta según la ubicación de tu entidad Cliente
import { Concepto } from '../../Concepto/entities/concepto.entity'; // Ajusta la ruta según la ubicación de tu entidad Concepto

@Entity({ name: 'gastos' })
export class Gasto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.gastos, { eager: true })
  cliente: Cliente;

  @ManyToOne(() => Concepto, (concepto) => concepto.gastos, { eager: true })
  concepto: Concepto;

  @Column()
  fecha: string;

  @Column()
  hora: string;

  @Column({ type: 'float' })
  valorGasto: number;

  @Column({ default: 'Activo' })
  estado: string;
}
