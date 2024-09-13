const {factorial} = require("./factorial.js")

test("Factorial of a number", () => {
	let number = 3;
	let expected = factorial(number);
	expect(expected).toBe(6);
})