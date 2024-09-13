const {reverseArray} = require("./reverseArray.js");

test("Reverse array", () => {
	let arr = [1,2,3];
	let expected = reverseArray(arr);
	expect(expected).toEqual([3,2,1]);
})