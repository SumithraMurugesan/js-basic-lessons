// const names = ['john', 'sam' , 'peter'];
// console.log(names[0]);
// console.log(names.length);
// console.log(names[names.length - 1]);

// //names is an array of Strings
// // length is a property of arrray
// // it returns a number
// // the lower bound of an array is 0
// // the upper bound of the array is length - 1;
// // the index for john is 0
// // sam 1
// // peter 2

// //--methods of array--

// names.push('Suresh');
// console.log('After push '+ names);

// //push will add the item at the end

// // ... is called as the spread oprator
// // it represents the entire items in the array
// const names2= [ ...names,'Raj'];
// console.log('names2 '+ names2);

// names.unshift('poppy');
// console.log('unshift:' + names)
// //it adds data to the beginning
// // so the index no of rest of the values will change now

// const names3 =  ['raj' ,...names];
// console.log(names3);
// //tjis will add data at the begininng
// //method slice()

// const bikes = ['bianchi', 'miele' , 'panasonic', 'miyala' , 'RE','ktm'];
// const b1 = [...bikes.slice(0,2)];
// console.log(b1);
// // it has copied 2mvalues from index 0 and assigned to b1

// const b2=[...bikes.slice(3)];
// console.log(b2);//last2 2;

// const newBikes = [
//     ...bikes.slice(0,2),
//     'benotto',
//     ...bikes.slice(2)
// ];

// console.log('newBiks:'+newBikes);

// // i think a new array calles newBikes is created.
// // then in index 0 and 1 values from bikes is copied using slice.
// // (o,2) metho .the first 2 values are copied,
// // in the 2nd index value 'benotto' is pushed
// // then from the third index agsin values from bikes is copied using slice
// // (2) -the values from the 2 index bikes are copied

// const newBikes2 = [
//     ...newBikes.slice(0,2),
//     ...newBikes.slice(4)
// ];

// console.log('newBiks2:'+newBikes2);

// const indexOfSam =  names.findIndex(names => names === 'sam');
// console.log('IndexOfSam:' + indexOfSam);

// //delete name from the array

// // function deleteName(name) {
// //     const indexOfname = names.findIndex(n => n === name);
// //     console.log('indexOfname'+indexOfname);
// //     const newArray =[
// //         ...names.slice(0, indexOfname),
// //         ...names.slice(indexOfname+1)
// //     ];

// // console.log("newArray " +newArray);
// // }
// // deleteName('john');

// //deleteName
// function deleteName(nametodelete, names) {
//     const indexOfname = names.findIndex(n => n === nametodelete);
//     console.log('indexOf name to delete'+indexOfname);
//     const newArray =[
//         ...names.slice(0, indexOfname),
//         ...names.slice(indexOfname+1)
//     ];
//     return newArray;
// }
// const deletesNames=deleteName('john', names);
// console.log(deletesNames);
// console.log(names);

// const numbers=[1,2,3,4,5,6,7,8,9];
// // console.log(numbers);
// // numbers.splice(3,3);//from the 3rd index delete the next 2 values
// // Method Array<number>.splice(start:number,deleteCount?:number);
// // the value in numbers are modified/deleted
// // console.log(numbers);//splice(staring index from where the value to be  deleted, number of values to be deleted
// const pizzaSlices = numbers.slice(2,6);//start and end index
// //(method) Array<number>.slice(start?:number , end? number)
// //imuutable method -does not chanes the source array.
// console.log('pizzaSlices: '+ pizzaSlices);
// console.log('original numbers: '+numbers);
 const numbers=[1,2,3,4,5,6,7,8,9];
//  numbers.reverse();// mutable one/

//anytime you want to use a mutation method and not mutate the original array
//we need to take a copy of the array
const numberReversed = [...numbers].reverse();
console.log(numberReversed);

console.log(numbers);
