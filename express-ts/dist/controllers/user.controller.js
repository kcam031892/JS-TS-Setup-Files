"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const User_1 = __importDefault(require("@models/User"));
const getUser = (req, res) => {
    const user = User_1.default;
    res.json({ user });
};
exports.getUser = getUser;
