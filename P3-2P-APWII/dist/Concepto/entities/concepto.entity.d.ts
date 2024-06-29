import { Gasto } from '../../Gasto/entities/gasto.entity';
export declare class Concepto {
    id: string;
    descripcion: string;
    estado: string;
    gasto?: Gasto[];
}
