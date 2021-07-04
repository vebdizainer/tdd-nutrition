"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidFoodAmountError = exports.EmptyFoodNameError = exports.Units = exports.Food = void 0;
const Food_1 = require("./Food");
Object.defineProperty(exports, "Food", { enumerable: true, get: function () { return Food_1.Food; } });
const Units_1 = require("./Units");
Object.defineProperty(exports, "Units", { enumerable: true, get: function () { return Units_1.Units; } });
const EmptyFoodNameError_1 = __importDefault(require("./errors/EmptyFoodNameError"));
exports.EmptyFoodNameError = EmptyFoodNameError_1.default;
const InvalidFoodAmountError_1 = __importDefault(require("./errors/InvalidFoodAmountError"));
exports.InvalidFoodAmountError = InvalidFoodAmountError_1.default;
