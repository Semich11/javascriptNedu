const {countOddNumber} = require("./countOddNumber.js");

test("Count Odd Number", () => {
	let arrayOfNumbers = [1,3];
	let oddNumberCount = countOddNumber(arrayOfNumbers);
	expect(oddNumberCount).toBe(2);
})