// src/libro/libro.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AreaSocialService } from './areasocial.service';
import { AreaSocial } from './entities/areasocial.entity';
import { CreateAreasocialInput } from './dto/create-areasocial.input';
import { UpdateAreasocialInput } from './dto/update-areasocial.input';

@Resolver(() => AreaSocial)
export class AreaSocialResolver {
  constructor(private readonly areaSocialService: AreaSocialService) {}

  @Mutation(() => AreaSocial)
  createAreaSocial(@Args('createAreasocialInput') createAreasocialInput: CreateAreasocialInput): Promise<AreaSocial> {
    return this.areaSocialService.create(createAreasocialInput);
  }

  @Query(() => [AreaSocial])
  findAllAreaSocial(): Promise<AreaSocial[]> {
    return this.areaSocialService.findAll();
  }

  @Query(() => AreaSocial)
  findAreaSocial(@Args('id', { type: () => Int }) id: number): Promise<AreaSocial> {
    return this.areaSocialService.findOne(id);
  }

  @Mutation(() => AreaSocial)
  async updateAreaSocial(@Args('updateAreasocialInput') updateAreasocialInput: UpdateAreasocialInput): Promise<AreaSocial> {
    return this.areaSocialService.update(updateAreasocialInput.id, updateAreasocialInput);
  }

  @Mutation(() => AreaSocial)
  async removeAreaSocial(@Args('id', { type: () => Int }) id: number): Promise<AreaSocial> {
    return this.areaSocialService.remove(id);
  }

  @Mutation(() => AreaSocial)
  removeLogicAreaSocial(@Args('id', { type: () => Int }) id: number): Promise<AreaSocial> {
    return this.areaSocialService.removeLogic(id);
  }
}
