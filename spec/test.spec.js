const Calculator = require('../src/simpleCalculator');
const calculator = new Calculator();

describe("Calculator", function () {
   
    it("Must add two numbers", function () {
        expect(calculator.add(3,5)).toEqual(8);
    });

    it("Must multiply two numbers", function () {
        expect(calculator.multiply(30,2)).toEqual(60);
    });

    it("Must add a bunch numbers", function () {
        expect(calculator.add(3,5,2)).toEqual(10);
    });

    it("Must add two numbers", function () {
        expect(calculator.add(1,2)).toEqual(3);
    });

    it("should return last result", function () {
        expect(calculator.last()).toEqual(3); //should return last value which is 3
    });
    it("allow last as a parameter", function () {
        expect(calculator.multiply("LAST",5)).toEqual(15); //should multiply last value(3) by 5
    });
    it("Should take single number as slot number", function () {
        expect(calculator.set_slot(1));
        expect(calculator.get_slot(1)).toEqual(15);//should display what is in slot 1
    });
});
