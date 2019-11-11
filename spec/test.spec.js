var calculator = require('../src/calculator');

describe("Simple calculator to add two numbers", function () {
    it("Must add two numbers", function () {
        expect(calculator.sum(0,0)).toEqual(0);
    });
});

describe("Simple calculator to add two numbers", function () {
    it("Must add two numbers", function () {
        expect(calculator.sum(-1,-1)).toEqual(-2);
    });
}); 

describe("Simple calculator to add two numbers", function () {
    it("Must add two numbers", function () {
        expect(calculator.sum(4,5)).toEqual(9);
    });
});
describe("Simple calculator that multiplies two numbers", function () {
    it("Must multiply two numbers", function () {
        expect(calculator.product(1,2)).toEqual(2);
    });
});
describe("Simple calculator that adds a bunch numbers", function () {
    it("Must add a bunch numbers", function () {
        expect(calculator.sum(1,2,3,4)).toEqual(10);
    });
});
describe("Simple calculator that multiplies a bunch numbers", function () {
    it("Must multiply a bunch numbers", function () {
        expect(calculator.product(1,2,3,4)).toEqual(24);
    });
});