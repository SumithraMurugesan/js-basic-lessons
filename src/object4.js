// const cody = new Object()
// cody.living = true
// cody.age = 33
// cody.gender = 'male'
// cody.getGender = function () {
//   return cody.gender
// }

// console.log(cody.getGender)

// console.log(cody)

// const myObject = new Object()
// myObject['0'] = 'f'
// myObject['1'] = '0'
// myObject['2'] = '0'
// console.log(myObject)

// const myString = new String('foo')
// console.log(myString)

// const person = function (living, age, gender) {
//   this.living = living
//   this.age = age
//   this.gender = gender
//   this.getGender = function () { return this.gender }
// }

// const smith = new person(true, 33, 'male')
// console.log(smith)


const myNumber = new Number(23);
const myString = new String('male');
const myObject= new Object();
const myArray= new Array('foo', 'bar');
const myFunction= new Function("x","y","return x*y");
const myDate= new Date();
const myReqExp= new ReqExp('\bt[a-z]+\b');
const myError= new Error('Sorry');


console.log(myNumber.constructor);
console.log(myString.constructor);
console.log(myObject.constructor);
console.log(myArray.constructor);
console.log(myFunction.constructor);
console.log(myDate.constructor);
console.log(myDate.constructor);
console.log(myReqExp.constructor);
console.log(myError.constructor);
