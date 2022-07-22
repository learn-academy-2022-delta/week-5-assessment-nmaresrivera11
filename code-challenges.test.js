// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

/* Psuedo Code:
- First I want to create a function named codeWordMaker.
- I want the function to take in a string.
- Then I want to take a string and convert it to an array using (.split("").
- I can map over it to search for "a", "e" or "E", "i", and "o" and change the corresponding to numbers 4, 3, 1, 0.
- The function will return a coded message.
*/


// a) Create a test with expect statements using the variables provided.

describe("codeWordMaker", () => {
    it("takes in a string", () => {
        const secretCodeWord1 = "Lackadaisical" 
        const secretCodeWord2 = "Gobbledygook" 
        const secretCodeWord3 = "Eccentric"
      expect(codeWordMaker(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codeWordMaker(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codeWordMaker(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })
// ReferenceError: codeWordMaker is not defined

// b) Create the function that makes the test pass.

const codeWordMaker = (str) => str.split("").map(value=>{
  if(value === 'a'){
      return 4
  }else if(value === 'e' || value === 'E'){
      return 3
  }else if(value === 'i'){
      return 1
  }else if(value === 'o'){
      return 0
  }else{
      return value
  }
}).join("")
// console.log(codeWordMaker(secretCodeWord1));
// console.log(codeWordMaker(secretCodeWord2));
// console.log(codeWordMaker(secretCodeWord3));
//  PASS  ./code-challenges.test.js
  // codeWordMaker
  // ✓ takes in a string (1 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

/* Psuedo Code:
- I created a function called specificFruit.
- The function will take in an array and letter as parameters.
- I want to filter through the given array using (.filter) to filter out the fruits that contain the given letter.
- It will return a new array that contains the fruites that include the given letter.
- I need to give into account of capitalized letters as well.
*/


// a) Create a test with expects statement using the variable provided.

describe("specificFruit", () => {
  it("takes in an array of words and a single letter", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"] 
    const letterA = "a" 
    const letterE = "e"
    expect(specificFruit(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(specificFruit(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})
// ReferenceError: specificFruit is not defined

// b) Create the function that makes the test pass.

// This one was a fail but I realized the A is capitalized in Apricot. So I refactored the function to take into consideration uppercase letters too.
// const specificFruit = (arr, letter ) => {
//   let filteredArray = arr.filter(value => value.includes(letter)
//   )
//   return filteredArray
// }

const specificFruit = (arr, letter) => {
  return arr.filter(value =>value.toLowerCase().includes(letter.toLowerCase()))
}
// console.log(specificFruit(fruitArray, letterA));
// console.log(specificFruit(fruitArray, letterE));
//  PASS  ./code-challenges.test.js
  // specificFruit
  // ✓ takes in an array of words and a single letter (1 ms)


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

/* Psuedo Code:
- I want to create a function named pokerHands
- This function will take in an array
- a for loop will iterate over the length of the array
- The function is looking for a pair and three of a kind
- pokerHands will return whether the given hand array is 'True' a "full house" or if it is 'False'.
*/

// a) Create a test with expect statements using the variable provided.

describe("pokerHands", () => {
  it("takes in an array of 5 numbers", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
  expect(pokerHands(hand1)).toEqual(true)
  expect(pokerHands(hand2)).toEqual(false)
  expect(pokerHands(hand3)).toEqual(false)
  })
})
// ReferenceError: pokerHands is not defined

// b) Create the function that makes the test pass.

const pokerHands = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === arr[1] && arr[1]=== arr[2] && arr[3] === arr[4]){
      return true
    } else {
      return false
    }
  }
}
// console.log(pokerHands(hand1));
// console.log(pokerHands(hand2));
// console.log(pokerHands(hand3));
//  PASS  ./code-challenges.test.js
  // pokerHands
  // ✓ takes in an array of 5 numbers (1 ms)