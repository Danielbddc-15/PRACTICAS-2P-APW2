// gasto.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GastoService } from './gasto.service';
import { GastoController } from './gasto.controller';
import { Gasto } from '../Gasto/entities/gasto.entity'; // Asegúrate de que la ruta sea correcta

@Module({
  imports: [TypeOrmModule.forFeature([Gasto])],
  providers: [GastoService],
  controllers: [GastoController],
})
export class GastoModule {}
