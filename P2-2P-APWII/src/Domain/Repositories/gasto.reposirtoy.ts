import { CreateGastoDto, UpdateGastoDto } from '../Dtos';
import { GastoEntity } from '../Entities/gasto.entity';

export abstract class GastoRepository {
  abstract create(createGastoDto: CreateGastoDto): Promise<GastoEntity>;
  abstract getAll(): Promise<GastoEntity[]>;
  abstract findById(id: number): Promise<GastoEntity>;
  abstract updateById(updateGastoDto: UpdateGastoDto): Promise<GastoEntity>;
  abstract deleteById(id: number): Promise<GastoEntity>;
}
