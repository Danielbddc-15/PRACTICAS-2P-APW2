import { Cliente } from '../../Cliente/entities/Cliente.entity';
import { Concepto } from '../../Concepto/entities/concepto.entity';
export declare class Gasto {
    id: string;
    cliente?: Cliente;
    concepto?: Concepto;
    fecha: string;
    hora: string;
    valorGasto: number;
    estado: string;
}
