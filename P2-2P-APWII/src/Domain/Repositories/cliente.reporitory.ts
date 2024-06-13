import { CreateClienteDto, UpdateClienteDto } from '../Dtos';
import { ClienteEntity } from '../Entities/cliente.entity';

export abstract class ClienteRepository {
  abstract create(createClienteDto: CreateClienteDto): Promise<ClienteEntity>;
  abstract getAll(): Promise<ClienteEntity[]>;
  abstract findById(id: number): Promise<ClienteEntity>;
  abstract updateById(updateClienteDto: UpdateClienteDto): Promise<ClienteEntity>;
  abstract deleteById(id: number): Promise<ClienteEntity>;
}
