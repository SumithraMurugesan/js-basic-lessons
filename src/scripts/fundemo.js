// const doc = doctorize('sumi')
// console.log(doc);

// function doctorize(firtName) {
//     return `Dr. ${firtName}`;
// }
//ANON function
// function (firtName) {
//     return `Dr. ${firtName}`;
// }


const doctorize = function (firtName)  {
    return `Dr. ${firtName}`;
}
//anon funtion
const doc = doctorize('sumi')
// console.log(doc);

//arrow function
const inchToCM = inches =>{
// console.log(inches);

    return inches * 2.54;
};
const resultcm = inchToCM(10);
// console.log(resultcm);

const funcA = () =>{
    // console.log('hi');
    };
    funcA();

// const add = (a,b=3) => a + b;
// const inTocm = (inches)=> inches * 2.54;
// console.log(add(100));
// console.log(inTocm);  

// //arrow function
// //create a objects
// const makeAperson = (first, last) => ( { name: `${first} ${last}`, age: 0});
// const person = makeAperson('sumi', 'murugesan');
// console.log(person);
// //** IIFE : Immediately Invoked Function Expression */
// (function (age){
//     console.log(`you are cool and your age is ${age}`);
// })(10);
//paranthess run first in javascripts so we have wrapped the function in {}.
//the function immediately runs.
// the arguments passed here is 10 for parameter age.


const employee = {
    name: 'Sumi murugesan' ,

    sayHi : function() {
        console.log(`hi!!! ${this.name}`);
        return `hi ${this.name}`;
    }
    
print: () => {
    console.log('hello employee');
},
yellHi() {
    console.log(`hi ${this.name.toUpperCase()}`);
}
};
employee.sayHi();
employee.print();
employee.yellHi();