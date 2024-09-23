
const {someSum, scoresGreatThan70, add5PointToScore, squareOfEachNumber, distributeBookToMember, findAllAfternoonClass, totalAmountSpent} = require("./classTask")

test("Test someSum", ()=>{
    let userInput = [2,3,4,5,6,7]
    let result = someSum(userInput)
    expect(result).toEqual([5,9,13])   
})

test("Test someSum with another array", ()=>{
    let userInput = [1,3,5,1,6,3]
    let result = someSum(userInput)
    expect(result).toEqual([4,6,9])   
})


test("Test that scoresGreatThan70 will return [ 80, 90, 100 ] when given [10,20,30,40,50,60,70,80,90,100]", () => {
    let userInput = [10,20,30,40,50,60,70,80,90,100]
    let result = scoresGreatThan70(userInput)
    let expected = [ 80, 90, 100 ]
    expect(result).toEqual(expected)
})

test("Test that add5PointToScore will return [ 90, 95, 83, 93, 100 ] when given [85,92,78,88,95]", () => {
    let userInput = [85,92,78,88,95]
    let result = add5PointToScore(userInput)
    let expected = [ 90, 97, 83, 93, 100 ]
    expect(result).toEqual(expected)
})

test("Test that squareOfEachNumber will return [ 4, 16, 36, 64, 100 ] when given [2,4,6,8,10]", () => {
    let userInput = [2,4,6,8,10]
    let result = squareOfEachNumber(userInput)
    let expected = [ 4, 16, 36, 64, 100 ]
    expect(result).toEqual(expected)
})

test("Test that distributeBookToMember will return [ 4, 16, 36, 64, 100 ]", () => {
    let books = ["Harry Potter", "Game of Throne", "Ring Of Power", "Think And Grow Rich"]
    let members =  ["Emily", "Jack", "Sophia", "Daniel"]
    let result = distributeBookToMember(books, members)
    let expected = {
        Emily: 'Harry Potter',
        Jack: 'Game of Throne',
        Sophia: 'Ring Of Power',
        Daniel: 'Think And Grow Rich'
      }
    expect(result).toEqual(expected)
})


test("Test that findAllAfternoonClass will return [ 4, 16, 36, 64, 100 ] when given [2,4,6,8,10]", () => {
    let afternoonTime = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]
    let result = findAllAfternoonClass(afternoonTime)
    let expected = [ '1:00 PM', '3:00 PM', '5:00 PM' ]
    expect(result).toEqual(expected)
})

test("Test that totalAmountSpent will return [ 4, 16, 36, 64, 100 ] when given [2,4,6,8,10]", () => {
    let afternoonTime = {"groceries": 150, "dining out": 100, "transportation": 80}
    let result = totalAmountSpent(afternoonTime)
    let expected = 330
    expect(result).toEqual(expected)
})