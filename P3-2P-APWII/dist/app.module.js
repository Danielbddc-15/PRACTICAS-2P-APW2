"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Cliente_entity_1 = require("./Cliente/entities/Cliente.entity");
const Gasto_entity_1 = require("./Gasto/entities/Gasto.entity");
const Concepto_entity_1 = require("./Concepto/entities/Concepto.entity");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '0939',
                database: 'P3-2P-APWII',
                entities: [Cliente_entity_1.Cliente, Gasto_entity_1.Gasto, Concepto_entity_1.Concepto],
                synchronize: true,
                logging: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([Cliente_entity_1.Cliente, Gasto_entity_1.Gasto, Concepto_entity_1.Concepto]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map