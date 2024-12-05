import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Cliente } from './Cliente/entities/Cliente.entity';
import { Gasto } from './Gasto/entities/Gasto.entity';
import { Concepto } from './Concepto/entities/Concepto.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './Cliente/cliente.module';
import { GastoModule } from './Gasto/gasto.module';
import { ConceptoModule } from './Concepto/concepto.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que ConfigModule esté disponible de forma global
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [Cliente, Gasto, Concepto],
        synchronize: true, // No uses esto en producción
        logging: true,
        autoLoadEntities: true,
      }),
    }),ClienteModule, GastoModule, ConceptoModule
    // Otros módulos de tu aplicación
  ],
  exports: [],
  controllers: [AppController], // Añade tus controladores aquí
  providers: [AppService], // Añade tus proveedores aquí
})
export class AppModule {}
