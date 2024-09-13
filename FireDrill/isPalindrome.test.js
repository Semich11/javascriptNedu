const {isPalindrome} = require("./isPalindrome.js");

test("Check If Number Is Palindrome", () => {
	let word = "racecar";
	let expected = isPalindrome(word);
	expect(expected).toBe(true)
})