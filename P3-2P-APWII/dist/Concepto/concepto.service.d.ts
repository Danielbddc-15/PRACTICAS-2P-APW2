import { CreateConceptoDto } from '../Concepto/dto/create-concepto.dto';
import { UpdateConceptoDto } from '../Concepto/dto/update-concepto.dto.';
import { Concepto } from '../Concepto/entities/concepto.entity';
import { Repository } from 'typeorm';
export declare class ConceptoService {
    private readonly conceptoRepository;
    constructor(conceptoRepository: Repository<Concepto>);
    create(createConceptoDto: CreateConceptoDto): Promise<Concepto>;
    findAll(): Promise<Concepto[]>;
    findOne(id: string): Promise<Concepto>;
    update(id: string, updateConceptoDto: UpdateConceptoDto): Promise<Concepto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
