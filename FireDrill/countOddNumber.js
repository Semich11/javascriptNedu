function countOddNumber(arr){
	count = 0;
	for (let number of arr){
		if (number % 2 > 0){
			count += 1;
		} 
	}
	return count;
	
}

module.exports = {countOddNumber};