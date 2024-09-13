const {isPrime} = require("./isPrime.js");

test("Is prime", () => {
	let number = 17;
	let prime = isPrime(number);
	expect(prime).toBe(true);
})