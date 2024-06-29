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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const Cliente_entity_1 = require("../Cliente/entities/Cliente.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ClienteService = class ClienteService {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    create(createClienteDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const Cliente = this.clienteRepository.create(createClienteDto);
            return this.clienteRepository.save(Cliente);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clienteRepository.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clienteRepository.findOneBy({ id });
        });
    }
    update(id, updateCiudadanoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updated = yield this.clienteRepository.update(id, updateCiudadanoDto);
            return yield this.findOne(id);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield this.clienteRepository.delete(id);
            return deleted;
        });
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Cliente_entity_1.Cliente)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map