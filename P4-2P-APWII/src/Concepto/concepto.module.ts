import { Module } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { ConceptosResolver } from './concepto.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concepto } from './entities/concepto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Concepto])],
  exports: [TypeOrmModule],
  providers: [ConceptosResolver, ConceptoService],
})
export class ConceptosModule {}
