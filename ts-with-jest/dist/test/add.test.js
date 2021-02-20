"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("@utils/add");
describe('add function', () => {
    it('should return the sum of 2 numbers', () => {
        const actual = add_1.add(20, 30);
        const expected = 50;
        expect(actual).toBe(expected);
    });
});
