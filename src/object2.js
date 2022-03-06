const o= new Object();
const a= new Array();
const d= new Date();
const f1= function(){
    console.log('the Cow Jumped over the Moon');
}

console.log("date =" + d);
f1();

const o1 = Object.create({ x: 100, y: 200});
console.log('x= '+ o1.x + "y=" + o1.y);

console.log(o1);

const o2 = Object.create(null);
const o3 = Object.create(Object.prototype);
// const 03=new Object();
// const 03 ={};

console.log(o2);
console.log(o3);


