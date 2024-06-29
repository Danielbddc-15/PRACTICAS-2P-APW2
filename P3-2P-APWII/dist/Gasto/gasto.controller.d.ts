import { GastoService } from './gasto.service';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
export declare class GastoController {
    private readonly gastoService;
    constructor(gastoService: GastoService);
    create(createGastoDto: CreateGastoDto): Promise<import("./entities/gasto.entity").Gasto>;
    findAll(): Promise<import("./entities/gasto.entity").Gasto[]>;
    findOne(id: string): Promise<import("./entities/gasto.entity").Gasto>;
    update(id: string, updateGastoDto: UpdateGastoDto): Promise<import("./entities/gasto.entity").Gasto | import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("./entities/gasto.entity").Gasto>;
}
