import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConceptoService } from './concepto.service';
import { Concepto } from './entities/concepto.entity';
import { CreateConceptoInput } from './dto/create-concepto.input';
import { UpdateConceptoInput } from './dto/update-concepto.input';

@Resolver(() => Concepto)
export class ConceptosResolver {
  constructor(private readonly conceptoService: ConceptoService) {}

  @Mutation(() => Concepto)
  createConcepto(@Args('createConceptoInput') createConceptoInput: CreateConceptoInput): Promise<Concepto> {
    return this.conceptoService.create(createConceptoInput);
  }

  @Query(() => [Concepto], { name: 'Conceptos' })
  findAll(): Promise<Concepto[]> {
    return this.conceptoService.findAll();
  }

  @Query(() => Concepto, { name: 'Concepto' })
  findOne(@Args('id', { type: () => Number }) id: number): Promise<Concepto> {
    return this.conceptoService.findOne(id);
  }

  @Mutation(() => Concepto)
  updateConcepto(@Args('updateConceptoInput') updateConceptoInput: UpdateConceptoInput): Promise<Concepto> {
    return this.conceptoService.update(updateConceptoInput.id, updateConceptoInput);
  }

  @Mutation(() => Concepto)
  removeConcepto(@Args('id', { type: () => Number }) id: number): Promise<Concepto> {
    return this.conceptoService.remove(id);
  }
}