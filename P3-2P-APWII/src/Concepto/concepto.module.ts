import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concepto } from './entities/concepto.entity'; // Ajusta la ruta según la ubicación de tu entidad Concepto
import { ConceptoService } from './concepto.service'; // Ajusta la ruta según la ubicación de tu servicio Concepto
import { ConceptoController } from './concepto.controller'; // Ajusta la ruta según la ubicación de tu controlador Concepto

@Module({
  imports: [
    TypeOrmModule.forFeature([Concepto]),
  ],
  controllers: [ConceptoController],
  providers: [ConceptoService],
  exports: [TypeOrmModule],
})
export class ConceptoModule {}
