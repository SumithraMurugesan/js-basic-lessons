// const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

//     const students = [
//       {
//         id: '11ce',
//         first_name: 'Dall',
//         last_name: 'Puckring',
//       },
//       {
//         id: '2958',
//         first_name: 'Margarete',
//         last_name: 'Brandi',
//       },
//       {
//         id: '565a',
//         first_name: 'Bendicty',
//         last_name: 'Woodage',
//       },
//       {
//         id: '3a16',
//         first_name: 'Micki',
//         last_name: 'Mattes',
//       },
//       {
//         id: 'f396',
//         first_name: 'Flory',
//         last_name: 'Gladeche',
//       },
//       {
//         id: 'de5f',
//         first_name: 'Jamill',
//         last_name: 'Emilien',
//       },
//       {
//         id: '54cb',
//         first_name: 'Brett',
//         last_name: 'Aizikowitz',
//       },
//       {
//         id: '9135',
//         first_name: 'Lorry',
//         last_name: 'Smallman',
//       },
//       {
//         id: '978f',
//         first_name: 'Gilly',
//         last_name: 'Flott',
//       },
//     ];

//     const people = [
//       {
//         birthday: 'April 22, 1993',
//         names: {
//           first: 'Keith',
//           last: 'Buckley'
//         }
//       },
//       {
//         birthday: 'January 3, 1975',
//         names: {
//           first: 'Larry',
//           last: 'Heep'
//         }
//       },
//       {
//         birthday: 'February 12, 1944',
//         names: {
//           first: 'Linda',
//           last: 'Bermeer'
//         }
//       }
//     ];


//     const buns = ['egg', 'wonder', 'brioche'];

//     const meats = {
//       beyond: 10,
//       beef: 5,
//       pork: 7
//     };

//     const prices = {
//       hotDog: 453,
//       burger: 765,
//       sausage: 634,
//       corn: 234,
//     };

    const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

//     const feedback = [
//       { comment: 'Love the burgs', rating: 4 },
//       { comment: 'Horrible Service', rating: 2 },
//       { comment: 'Smoothies are great, liked the burger too', rating: 5 },
//       { comment: 'Ambiance needs work', rating: 3 },
//       { comment: 'I DONT LIKE BURGERS', rating: 1 },
//     ];

//     const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

//     const inventory = [
//       { type: 'shirt', price: 4000 },
//       { type: 'pants', price: 4532 },
//       { type: 'socks', price: 234 },
//       { type: 'shirt', price: 2343 },
//       { type: 'pants', price: 2343 },
//       { type: 'socks', price: 542 },
//       { type: 'pants', price: 123 },
//     ];

//     function logItemsInArray(item, index, originalArray) {
//         const nextitem = originalArray[index + 1];
//         const previtem = originalArray[index -1];
//         //log the item 
//         console.log('current item' + item);
//         //log the next item if there is one
//         previtem ? console.log('previtem'+previtem): null;
//         //log the next item if there is one
//         previtem ? console.log('nexttem'+nextitem): null;
//         //it its the last item int the array, say goog bye

//         index === originalArray.length-1
//         ?console.log('goodBye')
//         :console.log('Getting the next item');
//         //index === originalArray.length && console.log('Goodbye');
//         console.log("------🍕------");
//     }

//     console.log(toppings);
//     toppings.forEach(logItemsInArray);

// function displayToppings(item) {
//     console.log('currentItem' + item);
// }
// toppings.forEach(displayToppings);

// //map

// toppings.map(displayToppings);//similar to foreach

// function addArms(face) {
//     return `🎈 ${face} 🎈`;

// }
// const toys = faces.map(addArms);


 function increament(item) {
     item=item*(25/100)+item;
     return item;//item * 1.25
 }

 const incrementvalues = orderTotals.map(increament);
// console.log(incrementvalues);


function tallyNumbers(prvNumber, currentNumber) {
    console.log(`the total so far is ${prvNumber}`);
    console.log(`the current Number is ${currentNumber}`);
    console.log('---------');
    return prvNumber + currentNumber;
}

const allOrders = orderTotals.reduce(tallyNumbers,0);
console.log('allOrders: '+allOrders);