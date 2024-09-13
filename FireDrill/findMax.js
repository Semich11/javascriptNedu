function findMax(arrayOfNumber){
	let max = 0;
	for (let number of arrayOfNumber){
		if (number > max){
			max = number;
		}
	}
	return max;

}

module.exports = {findMax};