/*
th e ability to access the outer level scoped data
from the inner level scoped even after the function is terminated*/

function doSomeTask() {
    const x = 100 ;
    const y = 20 ;
    console.log( 'x: '+x+ 'y:' +y);
}
doSomeTask();
console.log("completed");

function outer() {
    const outerVar = 'hey i am the outer Var!';
    // console.log(outerVar);
    
    function inner() {
        const innerVar = 'hey i am the inner var!';
        console.log(innerVar);
        console.log(outerVar);// closure -captured variable
    }
    // inner(); // call to inner () from outer()
    // console.log(innerVar); // uncaught ReferenceError:inerVar is not defined
    return inner;
}
// outer();
// outer.inner();
const innerFunc  = outer();
innerFunc();
// innerFunc = null ;

//-----
function createGreetings(greeting = '' ) {
    const myGreet = greeting.toUpperCase();
    return function(name) {
        return `${myGreet} ${name}` ;
    }
}
const result = createGreetings('welcome');
console.log(result('sumi')); 

const sayHello = createGreetings('hello');

const sayWelcome = createGreetings('welcome');
 console.log(sayHello('sumi'));
 console.log(sayWelcome('banu'));
 console.log(sayWelcome('lachu'));

 //---
 function createGame(gameName) {
    let score = 0;
    return function win() {
      score++;
      return `Your game name ${gameName} score is ${score}`;
    }
  }

//   const game= createGame("footbal"); 
//   console.log(game('win'));
//   console.log(game('win'));
//   console.log(game('win'));

  const hockeyGame = createGame('hockey');
  const soccerGame = createGame('Scocer');

  hockeyGame();
  hockeyGame();
  hockeyGame();
  soccerGame();

  console.log(hockeyGame('win'));
  console.log(soccerGame('win'));







