// src/libro/areasocial.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaSocial } from '../entities/areasocial.entity';
import { AreaSocialGateway } from './chat.gateway'
import { AreaSocialService } from '../areasocial.service';

@Module({
  imports: [TypeOrmModule.forFeature([AreaSocial])],
  providers: [AreaSocialService, AreaSocialGateway],
})
export class AreaSocialModule {}
