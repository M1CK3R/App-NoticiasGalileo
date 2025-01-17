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
exports.ContactsController = void 0;
const common_1 = require("@nestjs/common");
const contacts_service_1 = require("../services/contacts.service");
const createContact_dto_1 = require("./createContact.dto");
const updateContact_dto_1 = require("./updateContact.dto");
const upload_service_1 = require("../services/upload.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ContactsController = class ContactsController {
    constructor(contactsService, uploadService) {
        this.contactsService = contactsService;
        this.uploadService = uploadService;
    }
    findAll() {
        const contacts = this.contactsService.findAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Contactos obtenidos exitosamente',
            data: contacts,
        };
    }
    findOne(id) {
        const contact = this.contactsService.findOne(+id);
        if (!contact) {
            throw new common_1.NotFoundException(`No se encontró información para el contacto con ID ${id}`);
        }
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Contacto obtenido exitosamente',
            data: contact,
        };
    }
    async create(createContactDto, file) {
        const imagen = this.uploadService.uploadImage(file);
        return this.contactsService.create({ ...createContactDto, imagen: imagen });
    }
    async updateContact(id, updateContactDto, file) {
        let imagen;
        if (file) {
            imagen = this.uploadService.uploadImage(file);
        }
        return this.contactsService.update(id, {
            ...updateContactDto,
            ...(imagen && { imagen })
        });
    }
};
exports.ContactsController = ContactsController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ContactsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], ContactsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagen', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads'
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createContact_dto_1.CreateContactDto, Object]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagen', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads'
        })
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateContact_dto_1.UpdateContactDto, Object]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "updateContact", null);
exports.ContactsController = ContactsController = __decorate([
    (0, common_1.Controller)('contactosEstudiantes'),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService, upload_service_1.UploadService])
], ContactsController);
//# sourceMappingURL=contacts.controller.js.map