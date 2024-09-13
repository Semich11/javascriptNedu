
function isPalindrome(word){
	let newWord = "";

	for (let index = 0; index < word.length; index++){

		newWord += word.charAt(word.length - index - 1);

	}

	if (newWord == word){
		return true;
	}

	return false;
}


module.exports = {isPalindrome};