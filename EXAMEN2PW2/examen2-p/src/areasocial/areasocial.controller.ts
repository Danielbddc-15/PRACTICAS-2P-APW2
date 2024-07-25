import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AreaSocialService } from './areasocial.service';
import { AreaSocial } from './entities/areasocial.entity';
import { CreateAreasocialInput } from './dto/create-areasocial.input';
import { UpdateAreasocialInput } from './dto/update-areasocial.input';

@Controller('areasocial')
export class AreaSocialController {
  constructor(private readonly areaSocialService: AreaSocialService) {}

  @Post()
  create(@Body() createAreasocialInput: CreateAreasocialInput): Promise<AreaSocial> {
    return this.areaSocialService.create(createAreasocialInput);
  }

  @Get()
  findAll(): Promise<AreaSocial[]> {
    return this.areaSocialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AreaSocial> {
    return this.areaSocialService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAreasocialInput: UpdateAreasocialInput): Promise<AreaSocial> {
    return this.areaSocialService.update(+id, updateAreasocialInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<AreaSocial> {
    return this.areaSocialService.remove(+id);
  }

  @Put('remove-logic/:id')
  removeLogicAreasocial(@Param('id') id: string): Promise<AreaSocial> {
    return this.areaSocialService.removeLogic(+id);
  }
}
