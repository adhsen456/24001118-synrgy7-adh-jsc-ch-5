"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
//Validasi format Image
const validateFileType = (allowedMimeTypes) => {
    return (req, file, cb) => {
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            const err = new Error(`Only accepted file with type ${allowedMimeTypes.toString()}`);
            cb(err, false);
        }
    };
};
const UploadFile = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    fileFilter: validateFileType(['image/bmp', 'image/jpeg', 'image/x-png', 'image/png', 'image/gif']),
    limits: { fileSize: 10000000 }, // max file size 10MB
});
exports.default = UploadFile;
//# sourceMappingURL=multer.middleware.js.map