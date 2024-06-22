import { CreateClienteDto, ClienteDatasource, ClienteEntity, ClienteRepository, UpdateClienteDto } from '../../Domain';

export class ClienteRepositoryImpl implements ClienteRepository {

  constructor(
    private readonly datasource: ClienteDatasource,
  ) { }

  async create(createClienteDto: CreateClienteDto): Promise<ClienteEntity> {
    return this.datasource.create(createClienteDto);
  }

  async getAll(): Promise<ClienteEntity[]> {
    return this.datasource.getAll();
  }

  async findById(id: number): Promise<ClienteEntity> {
    return this.datasource.findById(id);
  }

  async updateById(updateClienteDto: UpdateClienteDto): Promise<ClienteEntity> {
    return this.datasource.updateById(updateClienteDto);
  }

  async deleteById(id: number): Promise<ClienteEntity> {
    return this.datasource.deleteById(id);
  }
}
