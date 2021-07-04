import { Nutritions } from "./Nutritions";
import { Units } from "./Units";
export declare class Food {
    private readonly name;
    private readonly unit;
    private readonly baseValues;
    private currentValues;
    constructor(name: string, unit: Units, baseValues: Nutritions);
    private validateFoodAmount;
    private validateFoodName;
    getName(): string;
    getUnit(): string;
    getBaseValues(): Nutritions;
    getCurrentValues(): Nutritions;
    changeAmount(amount: number): void;
    private calculateNutrients;
    calculateNutritionFromAmount(nutrition: string): number;
    changeCalories(calories: number): void;
    changeFat(fat: number): void;
    changeProtein(protein: number): void;
    changeCarbohydrate(carbohydrate: number): void;
    calculateAmountFromNutrition(nutrition: string): number;
}
