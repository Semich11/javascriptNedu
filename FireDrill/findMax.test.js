const {findMax} = require("./findMax.js");

test("Find Maximum number", () => {
	let arrayOfNUmber = [10,20,30,40,50];
	let max = findMax(arrayOfNUmber);
	expect(max).toBe(50);
})