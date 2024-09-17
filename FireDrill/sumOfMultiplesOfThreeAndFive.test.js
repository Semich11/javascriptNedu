const {sumOfMultiplesOfThreeAndFive} = require("./sumOfMultiplesOfThreeAndFive.js");

test("Sum Of Multiples Of Three And Five", () => {
	let number = 10;
	let expected = sumOfMultiplesOfThreeAndFive(number);
	expect(expected).toBe(33);

})
09