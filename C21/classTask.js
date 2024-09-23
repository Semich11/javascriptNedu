function someSum(userInput){
    let summation = 0

    let outPut = []

    let count = 0
    let i


    for(i of userInput){
        summation += i
        
        count += 1
        if(count == 2){
            count = 0
            outPut.push(summation)
            summation = 0
        }
    }


    let arrayLength = userInput.length 

    if (arrayLength % 2 > 0){
        outPut.push(i)
    }
    return outPut
}

// function occurrenceCount(userInput){
//     outPut = {}
    
//     let to_set = new Set(userInput)
//     let temp = ""
//     for (let _ in to_set){
//         temp += _
//     }

//     return temp
// }

// console.log("ffg: "+occurrenceCount([1,1,2,3,2]))



// const to_set = new Set([1,1,2,3,2])
// let temp = ""
// // console.log("Goat: "+ to_set.values())

// for (const x of to_set){
//     temp += x
// }
// console.log("temp: "+temp)


function scoresGreatThan70(testScores){
    let outPut = testScores.filter((score) => {
        return score > 70
    })

    return outPut
}

console.log(scoresGreatThan70([10,20,30,40,50,60,70,80,90,100]))


const add5PointToScore = (examScores) => {
    let outPut = examScores.map((score) => {
        return score + 5
    })

    return outPut
}

console.log(add5PointToScore([85,92,78,88,95]))

const squareOfEachNumber = (listOfInteger) => {
    let outPut = listOfInteger.map((integer) => {
        return integer * integer
    })

    return outPut
}

console.log(squareOfEachNumber([2,4,6,8,10]))

const distributeBookToMember = (books, members) => {    
    let outPut = {}

    let count = 0

    for (const member of members){
        outPut[member] = books[count]
        count += 1
    }
    

    return outPut
}

console.log(distributeBookToMember(["Harry Potter", "Game of Throne", "Ring Of Power", "Think And Grow Rich"], ["Emily", "Jack", "Sophia", "Daniel"]))

const findAllAfternoonClass = (classes) => {    
    let afternoon = ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]


    let outPut = classes.filter((time) => {
        return afternoon.includes(time)
    })

    return outPut
}

console.log(findAllAfternoonClass(["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"]))

const totalAmountSpent = (monthExpenses) => {

    let sum = 0

    for (let amount in monthExpenses){
        sum += monthExpenses[amount]
    }

    return sum
}

console.log(totalAmountSpent({"groceries": 150, "dining out": 100, "transportation": 80}))


module.exports = {someSum, scoresGreatThan70, add5PointToScore, squareOfEachNumber, distributeBookToMember, findAllAfternoonClass, totalAmountSpent}
