"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const notFound = (req, res) => {
    const message = 'Resource not found.';
    res.status(404).json({ message });
};
exports.notFound = notFound;
