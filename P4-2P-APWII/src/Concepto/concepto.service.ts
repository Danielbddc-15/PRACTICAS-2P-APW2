import { Injectable } from '@nestjs/common';
import { CreateConceptoInput } from './dto/create-concepto.input';
import { UpdateConceptoInput } from './dto/update-concepto.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Concepto } from './entities/concepto.entity';

@Injectable()
export class ConceptoService {
  constructor(
    @InjectRepository(Concepto)
    private readonly conceptoRepository: Repository<Concepto>,
  ) {}

  async create(createConceptoInput: CreateConceptoInput): Promise<Concepto> {
    const concepto = this.conceptoRepository.create(createConceptoInput);
    return this.conceptoRepository.save(concepto);
  }

  async findAll(): Promise<Concepto[]> {
    return this.conceptoRepository.find();
  }

  async findOne(id: number): Promise<Concepto> {
    return this.conceptoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateConceptoInput: UpdateConceptoInput): Promise<Concepto> {
    const concepto = await this.conceptoRepository.preload(updateConceptoInput);
    if (!concepto) {
      throw new Error(`Concepto con id ${id} no encontrado`);
    }
    return this.conceptoRepository.save(concepto);
  }

  async remove(id: number): Promise<Concepto> {
    const concepto = await this.conceptoRepository.findOneBy({ id });
    if (!concepto) {
      throw new Error(`Concepto con id ${id} no encontrado`);
    }
    await this.conceptoRepository.remove(concepto);
    return { ...concepto, id };
  }
}
