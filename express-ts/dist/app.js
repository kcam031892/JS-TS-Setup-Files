"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("@routes/user.route"));
const stringRequired_1 = require("@constant/stringRequired");
const app = express_1.default();
app.use('/public', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.send(stringRequired_1.stringRequired);
});
app.use('/user', user_route_1.default);
exports.default = app;
