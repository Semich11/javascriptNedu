let arr = [1,2,2,1]

function findFirstDuplicate(arr){
	let duplicate = -1;
	let store = [];
	let count = 0;
	
	for (let outIndex = 0; outIndex < arr.length; outIndex++ ){

		//for (let index = outIndex; index < arr[outIndex + 1]; index++ ){
		for (let index = 1; index < arr.length; index++ ){
			if (outIndex == index){
				continue;
			}

			if (arr[outIndex] == arr[outIndex + 1] || arr[outIndex] == arr[index]){
				store.push(arr[outIndex]);
				//break;
			}
		}
		
	}
	if (store.length > 0){
		duplicate = store[0]
		return duplicate
	}
	return duplicate;
}


console.log("stuufbjbjbj" + " " + findFirstDuplicate(arr))


module.exports = {findFirstDuplicate};