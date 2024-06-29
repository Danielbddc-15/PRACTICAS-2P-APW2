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
exports.Concepto = void 0;
const typeorm_1 = require("typeorm");
const gasto_entity_1 = require("../../Gasto/entities/gasto.entity");
let Concepto = class Concepto {
};
exports.Concepto = Concepto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Concepto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        unique: false,
    }),
    __metadata("design:type", String)
], Concepto.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'Activo' }),
    __metadata("design:type", String)
], Concepto.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gasto_entity_1.Gasto, (gasto) => gasto.concepto, { cascade: true }),
    __metadata("design:type", Array)
], Concepto.prototype, "gasto", void 0);
exports.Concepto = Concepto = __decorate([
    (0, typeorm_1.Entity)({ name: 'conceptos' })
], Concepto);
//# sourceMappingURL=concepto.entity.js.map