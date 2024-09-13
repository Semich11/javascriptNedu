function factorial(number){
	let factoria = number
	for (let count = number; 0 < count -1; count--){
		factoria *= count - 1;
	}
	return factoria;
}

module.exports = {factorial}