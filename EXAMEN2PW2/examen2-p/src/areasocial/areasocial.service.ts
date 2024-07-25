// src/libro/libro.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {AreaSocial } from './entities/areasocial.entity';
import { CreateAreasocialInput } from './dto/create-areasocial.input';
import { UpdateAreasocialInput } from './dto/update-areasocial.input';

@Injectable()
export class AreaSocialService {
  constructor(
    @InjectRepository(AreaSocial)
    private AreaSocialRepository: Repository<AreaSocial>,
  ) {}

  create(CreateAreasocialInput: CreateAreasocialInput): Promise<AreaSocial> {
    const newAreasocial = this.AreaSocialRepository.create(CreateAreasocialInput);
    return this.AreaSocialRepository.save(newAreasocial);
  }

  findAll(): Promise<AreaSocial[]> {
    return this.AreaSocialRepository.find();
  }

  findOne(id: number): Promise<AreaSocial> {
    return this.AreaSocialRepository.findOne({ where: { id } });
  }

  async update(id: number, updateAreasocialInput: UpdateAreasocialInput): Promise<AreaSocial> {
    const areaSocial = await this.AreaSocialRepository.findOne({ where: { id } });
    if (!areaSocial) {
      throw new NotFoundException(`AreaSocial with ID ${id} not found`);
    }
    Object.assign(areaSocial, updateAreasocialInput);
    return this.AreaSocialRepository.save(areaSocial);
  }

  async remove(id: number): Promise<AreaSocial> {
    const areaSocial = await this.AreaSocialRepository.findOne({ where: { id, isDeleted: false } });
    if (!areaSocial) {
      throw new NotFoundException(`AreaSocial with ID ${id} not found`);
    }
    await this.AreaSocialRepository.remove(areaSocial);
    return areaSocial;
  }

  async removeLogic(id: number): Promise<AreaSocial> {
    const areaSocial = await this.AreaSocialRepository.findOne({ where: { id, isDeleted: false } });
    if (!areaSocial) {
      throw new NotFoundException(`AreaSocial with ID ${id} not found`);
    }
    areaSocial.isDeleted = true;
    return this.AreaSocialRepository.save(areaSocial);
  }
}
