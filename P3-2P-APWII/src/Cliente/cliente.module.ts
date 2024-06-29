import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity'; // Ajusta la ruta según la ubicación de tu entidad Cliente
import { ClienteService } from './cliente.service'; // Ajusta la ruta según la ubicación de tu servicio Cliente
import { ClienteController } from './cliente.controller'; // Ajusta la ruta según la ubicación de tu controlador Cliente

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [TypeOrmModule],
})
export class ClienteModule {}
