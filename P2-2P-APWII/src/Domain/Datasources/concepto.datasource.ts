import { CreateConceptoDto, UpdateConceptoDto } from '../Dtos';
import { ConceptoEntity } from '../Entities/concepto.entity';

export abstract class ConceptoDatasource {
  abstract create(createConceptoDto: CreateConceptoDto): Promise<ConceptoEntity>;
  abstract getAll(): Promise<ConceptoEntity[]>;
  abstract findById(id: number): Promise<ConceptoEntity>;
  abstract updateById(updateConceptoDto: UpdateConceptoDto): Promise<ConceptoEntity>;
  abstract deleteById(id: number): Promise<ConceptoEntity>;
}
