1- Basic Javascript along with that HTML
2- TypeScript
3- Frontend Framework (React, Angular2+)



variableName = 1
1
variableName = "I am string"
"I am string"
variableName = []
[]
// Above declartion is not a good programming practice
undefined
// Self Scope, and javscript hoiesting read ==> TODO
undefined
var i = 0
undefined
i = "string"
"string"


// Good programming practice
undefined
let i = 0
VM2519:1 Uncaught SyntaxError: Identifier 'i' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM2519:1
// Let will restict you to not to declare a variable again with the same name which you already declare
undefined
let newI = 0
undefined
newI = "string"
"string"
// most preferable approach to declare variable is with const
undefined
const costVar = 0
undefined
costVar = 0
VM3466:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:9



    ????? Some missing part here could get from Ali Raza




// variable declartion examples
undefined
const firstName = "Muhammad Arslan"
undefined
const lastName = "Sajid"
undefined
const anotherLongName = "long name"


// datatypes in javascripts ==> google
undefined
const number = 1 // number
undefined
const string = "I am mixed string of letters and numbers 123"
undefined
const boolean = true // boolean

// Array, objects
undefined
const arr = [1, 2, 3, 4, 5]
undefined
const arrString = ["first", "second", "thrid"]
undefined
const days = ["monday", "tuesday", "wed.."] // basic usage
undefined
const mixedArray = [1, "two", 3, "four"]
undefined
// Array in javascript is 0 based index
undefined
// TODO => is there any language in which index starts from 1????

arr[3]
4
days[2]
"wed.."


// index could calculate by subtracting 1 from the actual position of item
undefined
const a =[1, 3,5, 6]
undefined
// position - 1 = index
undefined
// 4 - 1 = 3 (calcuating the index of 6)
undefined
const a2 = ["1", "2nd", "hello", "abc"]
undefined
// similary index of "hello" would be 2

// discussing some buit in functions of array in js
undefined
const longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
undefined
longArray.indexOf(8)
7
const anotherLongArray = ["one", "hellow", "two", "world", "another value", "test"]
undefined
anotherLongArray.indexOf("another value")
4
longArray.push(11)
11
longArray
(11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]0: 11: 22: 33: 44: 55: 66: 77: 88: 99: 1010: 11length: 11__proto__: Array(0)
anotherLongArray.push("another")
7
anotherLongArray
(7) ["one", "hellow", "two", "world", "another value", "test", "another"]

anotherLongArray
(7) ["one", "hellow", "two", "world", "another value", "test", "another"]
anotherLongArray.pop()
"another"
anotherLongArray
(6) ["one", "hellow", "two", "world", "another value", "test"]