const Calculator = require('../src/simpleCalculator');
const calculator = new Calculator();

describe("class Calculator", function () {
   
    it("Must add two numbers", function () {
        expect(calculator.add(3,5)).toEqual(8);
    });
});

describe("Simple calculator that multiplies two numbers", function () {
    it("Must multiply two numbers", function () {
        expect(calculator.multiply(30,2)).toEqual(60);
    });
});
describe("Simple calculator that adds a bunch numbers", function () {
    it("Must add a bunch numbers", function () {
        expect(calculator.add(3,5,2)).toEqual(10);
    });
});
describe("class Calculator", function () {
    it("Must add two numbers", function () {
        expect(calculator.add(1,2)).toEqual(3);
    });
});
describe("class Calculator", function () {
    it("should return last result", function () {
        expect(calculator.last()).toEqual(3);
    });
    it("allow last as a parameter", function () {
        expect(calculator.multiply("Last",5)).toEqual(15);
    });
    it("Should take single number as slot number", function () {
        expect(calculator.set_slot(1));
        expect(calculator.get_slot(1)).toEqual(3);
    });
});
