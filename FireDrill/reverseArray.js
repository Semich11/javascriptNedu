
function reverseArray(arr){

	let newArray = [];

	for (let index = 0; index < arr.length; index++){

		newArray.push(arr[arr.length - index - 1]);
		console.log(newArray);
		console.log("shout")

	}

	return newArray;
}


module.exports = {reverseArray};