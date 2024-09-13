
function sumEvenNumber(arra){
	let evenNumberSum = 0;
	for(let number of arra){
		if(number % 2 == 0){
			evenNumberSum += number
		}
	}
	return evenNumberSum;
}


module.exports = {sumEvenNumber};