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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCarMiddleware = void 0;
const createCarMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, availability } = req.body;
    try {
        if (!req.file) {
            return res.status(400).json({
                message: 'No file uploaded, please upload a file',
            });
        }
        if (!name || !price || !availability) {
            return res.status(400).json({
                message: 'Please input name, price, and availability',
            });
        }
        next();
    }
    catch (error) {
        res.status(500).json({
            message: error,
        });
    }
});
exports.createCarMiddleware = createCarMiddleware;
//# sourceMappingURL=cars.middleware.js.map