import { CreateConceptoDto, ConceptoDatasource, ConceptoEntity, ConceptoRepository, UpdateConceptoDto } from '../../Domain';

export class ConceptoRepositoryImpl implements ConceptoRepository {

  constructor(
    private readonly datasource: ConceptoDatasource,
  ) { }

  async create(createConceptoDto: CreateConceptoDto): Promise<ConceptoEntity> {
    return this.datasource.create(createConceptoDto);
  }

  async getAll(): Promise<ConceptoEntity[]> {
    return this.datasource.getAll();
  }

  async findById(id: number): Promise<ConceptoEntity> {
    return this.datasource.findById(id);
  }

  async updateById(updateConceptoDto: UpdateConceptoDto): Promise<ConceptoEntity> {
    return this.datasource.updateById(updateConceptoDto);
  }

  async deleteById(id: number): Promise<ConceptoEntity> {
    return this.datasource.deleteById(id);
  }
}
