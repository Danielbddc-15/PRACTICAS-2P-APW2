import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto.';
export declare class ConceptoController {
    private readonly ConceptoService;
    constructor(ConceptoService: ConceptoService);
    create(CreateConceptoDto: CreateConceptoDto): Promise<import("./entities/concepto.entity").Concepto>;
    findAll(): Promise<import("./entities/concepto.entity").Concepto[]>;
    findOne(id: string): Promise<import("./entities/concepto.entity").Concepto>;
    update(id: string, UpdateConceptoDto: UpdateConceptoDto): Promise<import("./entities/concepto.entity").Concepto>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
