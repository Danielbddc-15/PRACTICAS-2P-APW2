import { Gasto } from '../../Gasto/entities/gasto.entity';
export declare class Cliente {
    id: string;
    nombre: string;
    cedula: string;
    gasto?: Gasto[];
}
