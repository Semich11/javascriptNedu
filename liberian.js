console.log("Hello Javascript")

const Liberian = {
	id :  Number("1"),
	available : Boolean("true"),
	count: Number("6"),
	name: "Mystery",
	author: "miracle"

};

const user = new Object;

user.id = Number("1");
user.available = Boolean("true");
user.count = Number("6");
user.name = "Mystery";
user.author = "Miracle"

console.log(Liberian)

console.log(user)

function Book(id, available, count, name, author){
this.id = Number(id);
this.available = Boolean(available);
this.count = Number(count);
this.name = name;
this.author = author
}

const user1 = new Book("1", "true", "6", "Mystery", "Miracle")
console.log(user1)

var assign = +



console.log(assign)

console.log("3" == 3)

console.log(Symbol("+") === "+")

//function cal(firstNumber, secondNumber, operator){

//let sum = Symbol("+") === operator? firstNumber + secondNumber

//return sum
//}


//console.log(cal(3,2,"+"))















