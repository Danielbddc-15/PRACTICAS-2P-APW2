import { CreateGastoDto, GastoDatasource, GastoEntity, GastoRepository, UpdateGastoDto } from '../../Domain';

export class GastoRepositoryImpl implements GastoRepository {

  constructor(
    private readonly datasource: GastoDatasource,
  ) { }

  async create(createGastoDto: CreateGastoDto): Promise<GastoEntity> {
    return this.datasource.create(createGastoDto);
  }

  async getAll(): Promise<GastoEntity[]> {
    return this.datasource.getAll();
  }

  async findById(id: number): Promise<GastoEntity> {
    return this.datasource.findById(id);
  }

  async updateById(updateGastoDto: UpdateGastoDto): Promise<GastoEntity> {
    return this.datasource.updateById(updateGastoDto);
  }

  async deleteById(id: number): Promise<GastoEntity> {
    return this.datasource.deleteById(id);
  }
}
