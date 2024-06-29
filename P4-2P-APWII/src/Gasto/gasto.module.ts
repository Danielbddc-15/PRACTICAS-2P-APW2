import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastosResolver } from './gasto.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gasto } from './entities/gasto.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ Gasto ]) ],
  exports: [TypeOrmModule],
  providers: [GastosResolver, GastoService],
})
export class GastosModule {}