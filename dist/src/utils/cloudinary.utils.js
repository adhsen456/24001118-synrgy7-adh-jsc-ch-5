"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const stream_1 = require("stream");
const cloudinary_config_1 = __importDefault(require("../configs/cloudinary.config"));
const uploadFile = (fileBuffer, folder) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary_config_1.default.uploader.upload_stream({ folder }, (error, result) => {
            if (error)
                return reject(error);
            if (result === null || result === void 0 ? void 0 : result.secure_url) {
                resolve(result.secure_url);
            }
            else {
                reject(new Error("No secure_url returned from Cloudinary"));
            }
        });
        stream_1.Readable.from(fileBuffer).pipe(uploadStream);
    });
});
exports.uploadFile = uploadFile;
//# sourceMappingURL=cloudinary.utils.js.map