const {findFirstDuplicate} = require("./findFirstDuplicate");

let array = [1,2,3,4,5];

test("That will return 1", () => {
	let duplicate = findFirstDuplicate(array);
	expect(duplicate).toBe(-1);
})


test("Find first duplicate", () => {
	let arrayInner = [1,2,2];
	let duplicate = findFirstDuplicate(arrayInner);
	expect(duplicate).toBe(2);
})