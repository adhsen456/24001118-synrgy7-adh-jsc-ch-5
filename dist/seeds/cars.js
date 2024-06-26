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
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex('cars').del();
        // Inserts seed entries
        yield knex('cars').insert([
            {
                name: 'Toyota Avanza Veloz 2020',
                price: 450000000,
                file: 'https://res.cloudinary.com/dqaixl4l8/image/upload/v1716498154/binar-synrgy/challenge-5/toyota-avanza-1-3-e_230907175548-793_w8pahx.jpg',
                startRent: '05/26/2024',
                finishRent: '05/31/2024',
                createdAt: new Date(),
                updatedAt: new Date(),
                availability: true,
            },
        ]);
    });
}
exports.seed = seed;
;
//# sourceMappingURL=cars.js.map