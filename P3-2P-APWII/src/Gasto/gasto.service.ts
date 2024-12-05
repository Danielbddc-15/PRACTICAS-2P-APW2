import { Injectable } from '@nestjs/common';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { Repository } from 'typeorm';
import { Gasto } from './entities/gasto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GastoService {
  constructor(
    @InjectRepository(Gasto)
    private readonly gastoRepository: Repository<Gasto>
  ) {}

  async create(CreateGastoDto: CreateGastoDto) {
    const gasto = this.gastoRepository.create(CreateGastoDto);
    return this.gastoRepository.save(gasto);
  }

  async findAll() {
    return this.gastoRepository.find();
  }

  async findOne(id: string) {
    return this.gastoRepository.findOneBy({ id });
  }

  async update(id: string, UpdateGastoDto: UpdateGastoDto) {
    const Gasto = await this.gastoRepository.update(id, UpdateGastoDto);
    if (Gasto.affected === 1) {
      return this.gastoRepository.findOneBy({ id });
    }
    return Gasto;
  }

  async remove(id: string) {
    const Gasto = await this.gastoRepository.findOneBy({ id });
    if (Gasto) {
        Gasto.estado = 'Inactivo';
      return this.gastoRepository.save(Gasto);
    }
    return null;
  }
}
