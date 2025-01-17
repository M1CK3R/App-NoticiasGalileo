"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticiasModule = void 0;
const common_1 = require("@nestjs/common");
const news_controller_1 = require("./controllers/news.controller");
const noticias_service_1 = require("./services/noticias.service");
const upload_service_1 = require("./services/upload.service");
let NoticiasModule = class NoticiasModule {
};
exports.NoticiasModule = NoticiasModule;
exports.NoticiasModule = NoticiasModule = __decorate([
    (0, common_1.Module)({
        controllers: [news_controller_1.NoticiasController],
        providers: [noticias_service_1.NoticiaService, upload_service_1.UploadService],
    })
], NoticiasModule);
//# sourceMappingURL=noticias.module.js.map