"use strict"

// let person={
//     name:'Nag',
//     age:33
// }

//------------------------------------------------------------
//Object.defineProperty(person,'name',{configurable:false,writable:false,enumerable:false});
// Object.defineProperties()

// delete person.name;
// person.name="bla";

// for(let prop in person){
//     console.log(prop);
// }

//------------------------------------------------------------

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

// person.bla='bla';
// delete person.age;

// person.age=0;


//------------------------------------------------------------


// let person={
//     _name:'Nag',
//     _age:33,

//     set name(name){
//         console.log('set name');
//         if(name){
//             this._name=name;
//         }
//     },
//     get name(){
//         console.log('get name');
//         return this._name;
//     }


// }

// person.name="Nag N";  // write / set
// console.log(person.name); // read / get


