"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidFoodAmountError extends Error {
    constructor(amount) {
        super(`Invalid amount ${amount}. Must be a positive number`);
    }
}
exports.default = InvalidFoodAmountError;
