"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GastoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const gasto_service_1 = require("./gasto.service");
const gasto_controller_1 = require("./gasto.controller");
const gasto_entity_1 = require("../Gasto/entities/gasto.entity");
let GastoModule = class GastoModule {
};
exports.GastoModule = GastoModule;
exports.GastoModule = GastoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([gasto_entity_1.Gasto])],
        providers: [gasto_service_1.GastoService],
        controllers: [gasto_controller_1.GastoController],
    })
], GastoModule);
//# sourceMappingURL=gasto.module.js.map