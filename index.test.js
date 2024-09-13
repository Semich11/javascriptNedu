const {add, subtract, evenNumbers} = require("./index.js");

let numberOne = 2;
let numberTwo = 29;

test("Add two numbers", () => {

	let addFunction = add(numberOne, numberTwo);
	expect(addFunction).toBe(31);

})

test("Subtract two numbers", () => {

	let subtractFunction = add(numberTwo, numberOne);
	expect(subtractFunction).toBe(31);

})

test("Return evenNumbers", () => {

	let arrayOfNumbers = [1,2,3,4,5,6];
	let result = evenNumbers(arrayOfNumbers)
	expect(result).toEqual([2,4,6]);

})