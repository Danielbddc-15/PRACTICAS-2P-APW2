import { Injectable } from '@nestjs/common';
import { CreateGastoInput } from './dto/create-gasto.input';
import { UpdateGastoInput } from './dto/update-gasto.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Gasto } from './entities/gasto.entity';

@Injectable()
export class GastoService {
  constructor(
    @InjectRepository(Gasto)
    private readonly gastoRepository: Repository<Gasto>,
  ) {}

  async create(createGastoInput: CreateGastoInput): Promise<Gasto> {
    const gasto = this.gastoRepository.create(createGastoInput);
    return this.gastoRepository.save(gasto);
  }

  async findAll(): Promise<Gasto[]> {
    return this.gastoRepository.find();
  }

  async findOne(id: number): Promise<Gasto> {
    return this.gastoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateGastoInput: UpdateGastoInput): Promise<Gasto> {
    const gasto = await this.gastoRepository.preload(updateGastoInput);
    if (!gasto) {
      throw new Error(`Gasto con id ${id} no encontrado`);
    }
    return this.gastoRepository.save(gasto);
  }

  async remove(id: number): Promise<Gasto> {
    const gasto = await this.gastoRepository.findOneBy({ id });
    if (!gasto) {
      throw new Error(`Gasto con id ${id} no encontrado`);
    }
    await this.gastoRepository.remove(gasto);
    return { ...gasto, id };
  }
}
