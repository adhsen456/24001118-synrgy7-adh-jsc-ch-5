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
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.createTable('cars', (table) => {
            table.increments('id').primary();
            table.string('name', 255).notNullable();
            table.integer('price', 20).notNullable();
            table.text('file').notNullable();
            table.boolean('availability').notNullable();
            table.date('startRent').notNullable();
            table.date('finishRent').notNullable();
            table.timestamp('createdAt').notNullable();
            table.timestamp('updatedAt').notNullable();
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable('cars');
    });
}
exports.down = down;
//# sourceMappingURL=20240523205040_cars.js.map