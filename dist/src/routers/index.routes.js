"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cars_routes_1 = __importDefault(require("./cars.routes"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json({
        message: 'Masuk router',
    });
});
router.use('/cars', cars_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.routes.js.map