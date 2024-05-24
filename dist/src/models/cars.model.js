"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModel = void 0;
const objection_1 = require("objection");
class CarModel extends objection_1.Model {
    static get tableName() {
        return 'cars';
    }
}
exports.CarModel = CarModel;
//# sourceMappingURL=cars.model.js.map