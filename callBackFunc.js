function multi(num){
	let mul = 2;
	return num * mul
}

function calculate(num, mystery){
	return mystery(num)
}

console.log(calculate(3, multi))


console.log(calculate(3, function(number){
	let multiplier = 2
	return number * multiplier;
}));


console.log(calculate(3,(number)=>{
	let multiplier = 2
	return number * multiplier;
}));