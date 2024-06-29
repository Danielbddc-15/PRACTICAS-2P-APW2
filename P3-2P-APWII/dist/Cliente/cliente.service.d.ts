import { CreateClienteDto } from '../Cliente/dto/create-cliente.dto';
import { UpdateClienteDto } from '../Cliente/dto/update-cliente.dto';
import { Cliente } from '../Cliente/entities/Cliente.entity';
import { Repository } from 'typeorm';
export declare class ClienteService {
    private readonly clienteRepository;
    constructor(clienteRepository: Repository<Cliente>);
    create(createClienteDto: CreateClienteDto): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    findOne(id: string): Promise<Cliente>;
    update(id: string, updateCiudadanoDto: UpdateClienteDto): Promise<Cliente>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
