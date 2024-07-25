import { Module } from '@nestjs/common';
import { AreaSocialGateway } from './chat.gateway';

@Module({
  providers: [AreaSocialGateway],
})
export class ChatModule {}