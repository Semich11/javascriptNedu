/*const book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925};

const {title, author} = book

console.log(title + " by " + author)

const car = { make:"Toyota", model:"Camry", year:2021 };

//console.log(car.make)

function take(car){

	console.log()

	for (let key in car){
		console.log(key + ":" +car[key])
	}
}

//console.log(take(car));
take(car)*/

/*map(({make, model, year}) => {
	conslo.log(make+model+year)
})*/

/*map((car) => {
	conslo.log(car)
})*/



const counter = {
	count : 0,
	step: 1,
	increment: function(){
		this.count += this.step
		return this.count
	},
	decrement: function(){
		this.count -= this.step;
		return this.count

	}
}

console.log(counter.increment())
console.log(counter.decrement())

const person1 = {
	firstName: "Christopher",
	lastName: "Chima",
	fullName: function(){
		return this.firstName + " " + this.lastName
	}
}

console.log(person1.fullName())

const person = {
	firstName: "Christopher",
	lastName: "Chima",
	age: 12
}

console.log("First Name: " + person.firstName + ", " + "Last Name: " + person.lastName + ", " + "Age: " + person.age);
























