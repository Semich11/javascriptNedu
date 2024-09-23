const { default: expect } = require("expect")
const allEvenNumber = require("./index.js")

test("test for even numbers", () => {
    let arr = [3,4,5,6,7,8]
    let result = allEvenNumber(arr)
    let expected = [4,6,8]
    expect(result).toEqual(expected) 
})