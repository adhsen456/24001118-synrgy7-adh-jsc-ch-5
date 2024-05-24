"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cars_1 = require("../controllers/cars");
const cars_middleware_1 = require("../middlewares/cars.middleware");
const multer_middleware_1 = __importDefault(require("../middlewares/multer.middleware"));
const router = (0, express_1.Router)();
router.get('/', cars_1.getAllCars);
router.get('/:id', cars_1.getCarById);
router.post('/', multer_middleware_1.default.single('file'), cars_middleware_1.createCarMiddleware, cars_1.createCar);
router.put('/:id', multer_middleware_1.default.single('file'), cars_1.updateCar);
router.delete('/:id', cars_1.deleteCar);
exports.default = router;
//# sourceMappingURL=cars.routes.js.map