"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const knex_1 = __importDefault(require("knex"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const objection_1 = require("objection");
const index_routes_1 = __importDefault(require("./routers/index.routes"));
dotenv_1.default.config();
const PORT = Number(process.env.SERVER_PORT) || 8888;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const knexConnect = (0, knex_1.default)({
    client: 'postgresql',
    connection: {
        database: process.env.DATABASE,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        port: Number(process.env.DATABASE_PORT),
    },
});
objection_1.Model.knex(knexConnect);
app.use('/api/v1', index_routes_1.default);
const server = http_1.default.createServer(app);
server.listen(PORT, () => {
    console.log(`Connected to http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map