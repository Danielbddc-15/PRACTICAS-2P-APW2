import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GastoService } from './gasto.service';
import { Gasto } from './entities/gasto.entity';
import { CreateGastoInput } from './dto/create-gasto.input';
import { UpdateGastoInput } from './dto/update-gasto.input';

@Resolver(() => Gasto)
export class GastosResolver {
  constructor(private readonly gastoService: GastoService) {}

  @Mutation(() => Gasto)
  createGasto(@Args('createGastoInput') createGastoInput: CreateGastoInput): Promise<Gasto> {
    return this.gastoService.create(createGastoInput);
  }

  @Query(() => [Gasto], { name: 'Gastos' })
  findAll(): Promise<Gasto[]> {
    return this.gastoService.findAll();
  }

  @Query(() => Gasto, { name: 'Gasto' })
  findOne(@Args('id', { type: () => Number }) id: number): Promise<Gasto> {
    return this.gastoService.findOne(id);
  }

  @Mutation(() => Gasto)
  updateGasto(@Args('updateGastoInput') updateGastoInput: UpdateGastoInput): Promise<Gasto> {
    return this.gastoService.update(updateGastoInput.id, updateGastoInput);
  }

  @Mutation(() => Gasto)
  removeGasto(@Args('id', { type: () => Number }) id: number): Promise<Gasto> {
    return this.gastoService.remove(id);
  }
}
