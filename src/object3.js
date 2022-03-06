function getChild (parent){

    if(parent==null) throw TypeError();
    return Object.create(parent);
}



let o ={x:"dont change this value"};

//console.log(o.x);

let p=getChild(o);//object.create(o);
//console.log(p);

// o=null;
// //p=Object.create(o);

// p= getChild(o)
// console.log(p);

// Object.prototype = 0;
// console.log(Object);

//the prototype properties of built-in are ready-only.

let o2={};
// console.log(o2);

o2.x=100;
// console.log(o2);
p= getChild(o2);
// console.log(o2);
p.y=200;

let q= getChild(p);
q.z=300;
// console.log(q);

// console.log("q.x+q.y+q.z" + (q.x+q.y+q.z));
// console.log("p.x+p.y+p.z" + (p.x+p.y+p.z));

// console.log("p.x+p.y" + (p.x+p.y));
// console.log("o2.x" + (o2.x));


let book ={
    'main title': 'javascript',
    'subtitle' : 'the definitive guide',
    'for' :    'all audiences',
    author:{
        firstname:'donald',
        surname:'Duck'
    }
};

// let len=undefined;
// book=null;
// if(book){

//     if(book.subtitle){
//         len=book.subtitle.length;
//         console.log(len);
//     }
//     else
//     console.log("book.subtitle undefined:");
// }

// else
// console.log("book is null");

// len = book && book.subtitle && book.subtitle.length;
// if(len) console.log(len);

// console.log(book.author);

// delete book.author;
// console.log(book.author);

// console.log(book["main title"]);

// delete  book["main title"];
// console.log(book["main title"]);

// let o3={x:100};
// console.log(o3.x);

// delete o3.x;

// console.log(o3.x);


// delete o3.toString;

// console.log(o3.toString);

delete Object.prototype;

var a=1;
delete this.a;
function f1() {}
delete this.f1();






