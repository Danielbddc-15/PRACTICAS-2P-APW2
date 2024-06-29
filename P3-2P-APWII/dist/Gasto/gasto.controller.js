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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GastoController = void 0;
const common_1 = require("@nestjs/common");
const gasto_service_1 = require("./gasto.service");
const create_gasto_dto_1 = require("./dto/create-gasto.dto");
const update_gasto_dto_1 = require("./dto/update-gasto.dto");
let GastoController = class GastoController {
    constructor(gastoService) {
        this.gastoService = gastoService;
    }
    create(createGastoDto) {
        return this.gastoService.create(createGastoDto);
    }
    findAll() {
        return this.gastoService.findAll();
    }
    findOne(id) {
        return this.gastoService.findOne(id);
    }
    update(id, updateGastoDto) {
        return this.gastoService.update(id, updateGastoDto);
    }
    remove(id) {
        return this.gastoService.remove(id);
    }
};
exports.GastoController = GastoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gasto_dto_1.CreateGastoDto]),
    __metadata("design:returntype", void 0)
], GastoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GastoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GastoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gasto_dto_1.UpdateGastoDto]),
    __metadata("design:returntype", void 0)
], GastoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GastoController.prototype, "remove", null);
exports.GastoController = GastoController = __decorate([
    (0, common_1.Controller)('Gasto'),
    __metadata("design:paramtypes", [gasto_service_1.GastoService])
], GastoController);
//# sourceMappingURL=gasto.controller.js.map