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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gasto = void 0;
const typeorm_1 = require("typeorm");
const Cliente_entity_1 = require("../../Cliente/entities/Cliente.entity");
const concepto_entity_1 = require("../../Concepto/entities/concepto.entity");
let Gasto = class Gasto {
};
exports.Gasto = Gasto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Gasto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cliente_entity_1.Cliente, (cliente) => cliente.gasto, { eager: true }),
    __metadata("design:type", Cliente_entity_1.Cliente)
], Gasto.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => concepto_entity_1.Concepto, (concepto) => concepto.gasto, { eager: true }),
    __metadata("design:type", concepto_entity_1.Concepto)
], Gasto.prototype, "concepto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Gasto.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Gasto.prototype, "hora", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Gasto.prototype, "valorGasto", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'Activo' }),
    __metadata("design:type", String)
], Gasto.prototype, "estado", void 0);
exports.Gasto = Gasto = __decorate([
    (0, typeorm_1.Entity)({ name: 'gastos' })
], Gasto);
//# sourceMappingURL=gasto.entity.js.map