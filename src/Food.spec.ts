import { Food } from "./Food";
import EmptyFoodNameError from "./errors/EmptyFoodNameError";
import InvalidFoodAmountError from "./errors/InvalidFoodAmountError";
import { Units } from "./Units";

describe("Food", () => {
  test("create", () => {
    const baseValues = {
      amount: 100,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };
    const food = new Food("rice", Units.GRAM, baseValues);

    expect(food).toBeDefined();
    expect(food.getName()).toEqual("rice");
    expect(food.getUnit()).toEqual("g");
    expect(food.getBaseValues().amount).toEqual(100);
    expect(food.getBaseValues().fat).toEqual(30);
    expect(food.getBaseValues().carbohydrate).toEqual(40);
    expect(food.getBaseValues().protein).toEqual(65);
    expect(food.getBaseValues().calories).toEqual(124);
    expect(food.getCurrentValues()).toEqual(food.getBaseValues());
  });

  test("create food with empty name", () => {
    const baseValues = {
      amount: 100,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };

    expect(() => new Food("", Units.GRAM, baseValues)).toThrowError(
      EmptyFoodNameError
    );
  });

  test("create food with 0 amount", () => {
    const baseValues = {
      amount: 0,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };
    expect(() => new Food("rice", Units.GRAM, baseValues)).toThrowError(
      InvalidFoodAmountError
    );
  });

  test("create food and change amount", () => {
    const baseValues = {
      amount: 23,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };

    const food = new Food("rice", Units.GRAM, baseValues);
    food.changeAmount(23);
    expect(food.getCurrentValues().amount).toEqual(23);
  });

  test("create food and change amount with negative number", () => {
    const baseValues = {
      amount: 23,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };

    const food = new Food("rice", Units.GRAM, baseValues);

    expect(() => food.changeAmount(-23)).toThrowError(InvalidFoodAmountError);
  });

  test("create food change amount and calc current calories", () => {
    const baseValues = {
      amount: 100,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };

    const food = new Food("rice", Units.GRAM, baseValues);
    food.changeAmount(87);
    expect(food.getCurrentValues().calories).toEqual(108);
    expect(food.getCurrentValues().fat).toEqual(27);
    expect(food.getCurrentValues().carbohydrate).toEqual(35);
    expect(food.getCurrentValues().protein).toEqual(57);
  });

  describe("create food and change values", () => {
    let food: Food;

    beforeEach(() => {
      const baseValues = {
        amount: 100,
        fat: 4,
        carbohydrate: 450,
        protein: 1,
        calories: 130,
      };

      food = new Food("rice", Units.GRAM, baseValues);
    });

    test("change calories and calculate current values", () => {
      food.changeCalories(211);
      const { calories, amount, fat, carbohydrate, protein } =
        food.getCurrentValues();
      expect(calories).toEqual(211);
      expect(amount).toEqual(163);
      expect(fat).toEqual(7);
      expect(carbohydrate).toEqual(734);
      expect(protein).toEqual(2);
    });

    test("change fat and calculate current values", () => {
      food.changeFat(20);
      const { calories, amount, fat, carbohydrate, protein } = food.getCurrentValues();
      expect(calories).toEqual(650);
      expect(amount).toEqual(500);
      expect(fat).toEqual(20);
      expect(carbohydrate).toEqual(2250);
      expect(protein).toEqual(5);
    });
    test("change protein and calculate current values", () => {
      food.changeProtein(103);
      const { calories, amount, fat, carbohydrate, protein } = food.getCurrentValues();
      expect(calories).toEqual(13390);
      expect(amount).toEqual(10300);
      expect(fat).toEqual(412);
      expect(carbohydrate).toEqual(46350);
      expect(protein).toEqual(103);
    });
    test("change carbohydrate and calculate current values", () => {
      food.changeCarbohydrate(11);
      const { calories, amount, fat, carbohydrate, protein } = food.getCurrentValues();

      expect(calories).toEqual(4);
      expect(amount).toEqual(3);
      expect(fat).toEqual(1);
      expect(carbohydrate).toEqual(11);
      expect(protein).toEqual(1);
    });
  });
});
