import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto.';

@Controller('concepto')
export class ConceptoController {
  constructor(private readonly ConceptoService: ConceptoService) {}

  @Post()
  create(@Body() CreateConceptoDto: CreateConceptoDto) {
    return this.ConceptoService.create(CreateConceptoDto);
  }

  @Get()
  findAll() {
    return this.ConceptoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ConceptoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateConceptoDto: UpdateConceptoDto) {
    return this.ConceptoService.update(id, UpdateConceptoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ConceptoService.remove(id);
  }
}