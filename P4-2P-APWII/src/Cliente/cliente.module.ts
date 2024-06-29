import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClientesResolver } from './cliente.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  exports: [TypeOrmModule],
  providers: [ClientesResolver, ClienteService],
})
export class ClientesModule {}
