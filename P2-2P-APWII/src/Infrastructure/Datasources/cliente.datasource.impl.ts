import { prisma } from '../../Data/Postgres';
import { CreateClienteDto, UpdateClienteDto } from '../../Domain/Dtos';
import { ClienteDatasource } from '../../Domain/Datasources/cliente.datasource';
import { ClienteEntity } from '../../Domain/Entities/cliente.entity';

export class ClienteDatasourceImpl implements ClienteDatasource {
  async create(createClienteDto: CreateClienteDto): Promise<ClienteEntity> {
    const cliente = await prisma.cliente.create({
      data: createClienteDto
    });

    return ClienteEntity.fromObject(cliente);
  }

  async getAll(): Promise<ClienteEntity[]> {
    const clientes = await prisma.cliente.findMany();
    return clientes.map(cliente => ClienteEntity.fromObject(cliente));
  }

  async findById(id: number): Promise<ClienteEntity> {
    const cliente = await prisma.cliente.findFirst({
      where: { id }
    });

    if (!cliente) throw `Cliente with id ${id} not found`;
    return ClienteEntity.fromObject(cliente);
  }

  async updateById(updateClienteDto: UpdateClienteDto): Promise<ClienteEntity> {
    await this.findById(updateClienteDto.id);
    
    const updatedCliente = await prisma.cliente.update({
      where: { id: updateClienteDto.id },
      data: updateClienteDto!.values
    });

    return ClienteEntity.fromObject(updatedCliente);
  }

  async deleteById(id: number): Promise<ClienteEntity> {
    await this.findById(id);
    const deleted = await prisma.cliente.delete({
      where: { id }
    });

    return ClienteEntity.fromObject(deleted);
  }
}
