// There are 8 basic data types in JavaScript.
// Null.
// Undefined.
// Number.
// Boolean.
// BigInts.
// Object.
// String.
// Symbol.
// let stringNumber:string = "5"
// let stringNumber2:number = "5"
//examples
let a = 5
let b = 6
let number:number | string = 8
let testString:string = "8"
const booleanTest: boolean = false
const booleanTestTrue: boolean = true
const test1:any = NaN

function string(a,b):string{
    return "a" + "b";//56 != 11
}
function string2(a:number,b:string):number{
    return +a + +b;//11
}
type stringTestType = {
    lastName:string,
    firstName:string
}
function fullName(a:stringTestType,b:stringTestType):void {
    console.log('My full name is ' + a.lastName + ' ' + b.firstName);
}
let obj = {
    key:val
}
string2(2,"2")
string2(2,2)

//TS => JS


// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// obj.a