// let array = [1,2,3,"home", true]

// console.log(array)

// let newArray = new Array(2)

// newArray.push(2)
// newArray.push(3)

// // console.log(newArray)

// let result = Array.from("semicolon")
// console.log(result)


// let answer = Array.of(1,2,3,4,5,6,7,8,9,10,11,12,13,13)
// console.log(answer)

// let arrayOfNumber = [1,2,3,4,5,6,78]

// let slice = arrayOfNumber.slice(1)
// console.log(slice)

// console.log(arrayOfNumber.splice(1,2))

let arrayOfNumbers = [1,2,3,4,5,67]
let arr = [3,4,5,6,7,8]
let answer = arrayOfNumbers.splice(1,0,200,9,...arr)

console.log(arrayOfNumbers)
console.log(answer)

console.log("\n\n\n\n\n\n\n")

let newArr = [1,2,3,4]

arr.forEach((element, index, ...newArr) => {
    console.log(newArr)
    console.log(index)
    // console.log(element[3])
})

function allEvenNumber(){
    let evenNumbers =  arr.filter((number) => { return number % 2 == 0})
    console.log(arr)
    return evenNumbers

}
console.log(allEvenNumber())
module.exports = allEvenNumber
