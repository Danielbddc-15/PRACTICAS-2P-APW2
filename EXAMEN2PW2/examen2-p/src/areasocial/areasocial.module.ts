// src/libro/libro.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaSocialService } from './areasocial.service';
import { AreaSocialController } from './areasocial.controller';
import { AreaSocialResolver } from './areasocial.resolvers';
import { AreaSocial } from './entities/areasocial.entity';
import { AreaSocialGateway } from './websocket/chat.gateway';
import { ChatModule } from './websocket/chatmodule'
import { AppController } from '../app.controller';
import { AppService } from '../app.service';

@Module({
  imports: [TypeOrmModule.forFeature([AreaSocial])],
  providers: [AreaSocialService, AreaSocialResolver, AreaSocialGateway, AppService ],
  controllers: [AreaSocialController, AppController],
})
export class AreaSocialModule {}
