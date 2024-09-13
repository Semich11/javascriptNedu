const {sumEvenNumber} = require("./sumEvenNumbers.js");


test("Sum even numbers", () => {
	let arrNumbers = [2,4];

	let evenSum = sumEvenNumber(arrNumbers)
	expect(evenSum).toBe(6);
})