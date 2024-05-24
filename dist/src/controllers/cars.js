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
exports.deleteCar = exports.updateCar = exports.createCar = exports.getCarById = exports.getAllCars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const cars_model_1 = require("../models/cars.model");
const cloudinary_utils_1 = require("../utils/cloudinary.utils");
dotenv_1.default.config();
const getAllCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield cars_model_1.CarModel.query();
        if (!cars.length)
            return res.status(404).json({
                message: 'Cars data not found',
            });
        res.status(200).json({
            message: 'All cars data have been obtained',
            data: {
                cars,
            }
        });
    }
    catch (error) {
        res.status(400).json({
            error: true,
            message: error,
        });
    }
});
exports.getAllCars = getAllCars;
const getCarById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = +req.params.id;
        const car = yield cars_model_1.CarModel.query()
            .findById(carId);
        if (!car)
            return res.status(404).json({
                message: 'Car data not found',
            });
        res.status(200).json({
            message: 'Car data has been obtained',
            data: {
                car,
            },
        });
    }
    catch (error) {
        res.status(400).json({
            error: true,
            message: error,
        });
    }
    ;
});
exports.getCarById = getCarById;
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file)
        return;
    const { name, price, availability, startRent, finishRent } = req.body;
    try {
        const file = req.file.buffer;
        const fileURL = yield (0, cloudinary_utils_1.uploadFile)(file, String(process.env.CLOUDINARY_FOLDER_PATH));
        const newCar = yield cars_model_1.CarModel.query().insertGraph({
            name,
            price,
            file: fileURL,
            availability,
            startRent,
            finishRent,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        res.status(201).json({
            message: 'Car data has been created',
            data: {
                car: newCar,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: error,
        });
    }
});
exports.createCar = createCar;
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = +req.params.id;
    const { name, price, availability, startRent, finishRent, } = req.body;
    try {
        const updateCarParams = {
            name,
            price,
            availability,
            startRent,
            finishRent,
            updatedAt: new Date(),
        };
        if (req.file) {
            const file = req.file.buffer;
            const fileURL = yield (0, cloudinary_utils_1.uploadFile)(file, String(process.env.CLOUDINARY_FOLDER_PATH));
            updateCarParams.file = fileURL;
        }
        const updatedCar = yield cars_model_1.CarModel.query().patchAndFetchById(carId, updateCarParams);
        if (!updatedCar) {
            return res.status(404).json({
                message: 'Car data is not found',
            });
        }
        res.status(200).json({
            message: 'Car data has been updated',
            data: {
                car: updatedCar,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: error,
        });
    }
});
exports.updateCar = updateCar;
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = +req.params.id;
    try {
        yield cars_model_1.CarModel.query().deleteById(carId)
            .throwIfNotFound();
        res.status(200).json({
            message: 'Car data has been deleted',
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: error,
        });
    }
});
exports.deleteCar = deleteCar;
//# sourceMappingURL=cars.js.map