// console.log("JS file included!")
/* 
  the above line of code is commented out using a single line comment, the shortcut is control + / or command + /

  This comment is a multiline comment, shortcut is shift + alt + A or shift + option + A
 */


let myName = "Abhay"
console.log(myName)

myName = "Abhay Sharma"
console.log(myName)

const address = "Earth"
console.log(address)

let myProfession
myProfession = "Professor"
console.log(myProfession)

// array is an object data type
const myScore = [56, 76, 98]
console.log(myScore[1])

let num = 10
num += 2
console.log(num)

// === will check if the values and data types are both matching
console.log(num === "12")

// > is simple grater than comparison
console.log(num > 90)

// !== will be true if the two sides are not equal
console.log(num !== 90)

// ! in front of an expression will negate the result of the expression
console.log(!(num !== 90))

// the && logical operator will be true if all of the conditions are met
console.log(num >= 7 && num !== 12 && myScore[0] < 98)

// the || logical operator will be true if any of the conditions are met
console.log(num >= 7 || num !== 12)