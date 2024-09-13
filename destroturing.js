const person = {
	firstName: "chris",
	lastName: "chima",
	age: "16"
}

function some(person){
	const {firstName, lastName} = person
	return firstName + lastName
}

console.log(some(person))
