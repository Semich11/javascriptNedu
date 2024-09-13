/*+{
	valueOf: function() {
		return "0xFF"	
	}
}

console.log("pull")

const strPrim = "dcode";
const strObj = new String("dcode");
const strObjPrim = strObj.valueOf();

console.log(strObjPrim)
console.log(typeof strObjPrim)



class Product {
	constructor (name, cost) {
		this.name = name;
		this.cost = cost;
	}
	valueOf

}


const p1 = new Product("sampung", 850);
const p2 = new Product("Iphone", 790);

const total = p1 + p2;

console.log(p1.valueOf())
console.log(total);

*/

const chris = +{

}

console.log(chris.valueOf())



class Product {
	constructor (name, cost) {
		this.name = name;
		this.cost = cost;
	}

}


const p1 = new Product("sampung", 850);





console.log(p1.valueOf())


function Christo(name, age){
	this.name = name
	this.age = age
}

const one = new Christo("chris", 15 )
console.log(one.valueOf())


const bb = +{
	valueOf: function() {
		return false	
	}
}

console.log(bb)

let text = ""

for (let i = 0; i < 5; i++) {
  text += "The number is " + i +"\n";
}

console.log(text)








