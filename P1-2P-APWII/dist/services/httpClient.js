"use strict";
// src/services/httpClient.ts
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
exports.GotHttpClient = exports.AxiosHttpClient = void 0;
class AxiosHttpClient {
    constructor() {
        this.axios = require('axios');
    }
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get(url);
            return response.data;
        });
    }
}
exports.AxiosHttpClient = AxiosHttpClient;
class GotHttpClient {
    constructor() {
        this.got = require('got');
    }
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.got(url);
            return JSON.parse(response.body);
        });
    }
}
exports.GotHttpClient = GotHttpClient;
