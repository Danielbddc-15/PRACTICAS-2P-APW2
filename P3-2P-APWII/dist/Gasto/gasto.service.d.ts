import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { Repository } from 'typeorm';
import { Gasto } from './entities/gasto.entity';
export declare class GastoService {
    private readonly gastoRepository;
    constructor(gastoRepository: Repository<Gasto>);
    create(CreateGastoDto: CreateGastoDto): Promise<Gasto>;
    findAll(): Promise<Gasto[]>;
    findOne(id: string): Promise<Gasto>;
    update(id: string, UpdateGastoDto: UpdateGastoDto): Promise<Gasto | import("typeorm").UpdateResult>;
    remove(id: string): Promise<Gasto>;
}
