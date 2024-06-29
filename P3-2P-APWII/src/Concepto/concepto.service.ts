import { Injectable } from '@nestjs/common';
import { CreateConceptoDto } from '../Concepto/dto/create-concepto.dto';
import { UpdateConceptoDto } from '../Concepto/dto/update-concepto.dto.';
import { Concepto } from '../Concepto/entities/concepto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConceptoService {
  constructor(
    @InjectRepository(Concepto)
    private readonly conceptoRepository: Repository<Concepto>
  ) {
    
  }
  async create(createConceptoDto: CreateConceptoDto) {
    const Concepto = this.conceptoRepository.create(createConceptoDto);
    return this.conceptoRepository.save(Concepto);
  }

  async findAll() {
    return await this.conceptoRepository.find();
  }

  async findOne(id: string) {
    return await this.conceptoRepository.findOneBy({id});
  }

  async update(id: string, updateConceptoDto: UpdateConceptoDto) {
    const updated= await this.conceptoRepository.update(id, updateConceptoDto);
    return await this.findOne(id)
    
  }

  async remove(id: string) {
    const deleted = await this.conceptoRepository.delete(id);
    return deleted;
  }
}