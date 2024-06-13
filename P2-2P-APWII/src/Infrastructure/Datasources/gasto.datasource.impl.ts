import { prisma } from '../../Data/Postgres';
import { CreateGastoDto, UpdateGastoDto } from '../../Domain/Dtos';
import { GastoDatasource } from '../../Domain/Datasources/gasto.datasource';
import { GastoEntity } from '../../Domain/Entities/gasto.entity';

export class GastoDatasourceImpl implements GastoDatasource {
  async create(createGastoDto: CreateGastoDto): Promise<GastoEntity> {
    const gasto = await prisma.gasto.create({
      data: createGastoDto
    });

    return GastoEntity.fromObject(gasto);
  }

  async getAll(): Promise<GastoEntity[]> {
    const gastos = await prisma.gasto.findMany();
    return gastos.map(gasto => GastoEntity.fromObject(gasto));
  }

  async findById(id: number): Promise<GastoEntity> {
    const gasto = await prisma.gasto.findFirst({
      where: { id }
    });

    if (!gasto) throw `Gasto with id ${id} not found`;
    return GastoEntity.fromObject(gasto);
  }

  async updateById(updateGastoDto: UpdateGastoDto): Promise<GastoEntity> {
    await this.findById(updateGastoDto.id);
    
    const updatedGasto = await prisma.gasto.update({
      where: { id: updateGastoDto.id },
      data: updateGastoDto!.values
    });

    return GastoEntity.fromObject(updatedGasto);
  }

  async deleteById(id: number): Promise<GastoEntity> {
    await this.findById(id);
    const deleted = await prisma.gasto.delete({
      where: { id }
    });

    return GastoEntity.fromObject(deleted);
  }
}
