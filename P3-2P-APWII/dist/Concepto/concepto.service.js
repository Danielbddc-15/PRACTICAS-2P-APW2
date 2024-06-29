"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptoService = void 0;
const common_1 = require("@nestjs/common");
const concepto_entity_1 = require("../Concepto/entities/concepto.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ConceptoService = class ConceptoService {
    constructor(conceptoRepository) {
        this.conceptoRepository = conceptoRepository;
    }
    create(createConceptoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const Concepto = this.conceptoRepository.create(createConceptoDto);
            return this.conceptoRepository.save(Concepto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.conceptoRepository.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.conceptoRepository.findOneBy({ id });
        });
    }
    update(id, updateConceptoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updated = yield this.conceptoRepository.update(id, updateConceptoDto);
            return yield this.findOne(id);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield this.conceptoRepository.delete(id);
            return deleted;
        });
    }
};
exports.ConceptoService = ConceptoService;
exports.ConceptoService = ConceptoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(concepto_entity_1.Concepto)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ConceptoService);
//# sourceMappingURL=concepto.service.js.map