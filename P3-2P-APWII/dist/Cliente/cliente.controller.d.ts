import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClienteController {
    private readonly ClienteService;
    constructor(ClienteService: ClienteService);
    create(createClienteDto: CreateClienteDto): Promise<import("./entities/Cliente.entity").Cliente>;
    findAll(): Promise<import("./entities/Cliente.entity").Cliente[]>;
    findOne(id: string): Promise<import("./entities/Cliente.entity").Cliente>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<import("./entities/Cliente.entity").Cliente>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
