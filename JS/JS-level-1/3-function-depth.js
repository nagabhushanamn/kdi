/*

    every function is an object internally

    we can create function in 2 ways

    way-1 : function declaration / Named function
    
            --> func-obj created at context-creation phase
            --> always get hoisted with function-obj

            when to use?

            --> to keep that function in that context at any condition

    way-2 : function expression / Anonmous function

            --> func-obj created at context-execution phase
            --> will not get hoisted with function-obj

            when to use?

            --> to create function based on input/condition

    


*/

// way-1 : function declaration

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12, 13));

//-------------------------------------------------------


// way-2 : function expression

// console.log(add(12, 13));
// var add = function (n1, n2) {
//     return n1 + n2;
// }
// // console.log(add(12, 13));


// let userType = "admin";

// let action;

// if (userType === "admin") {
//     action = function () {
//         console.log('Admin action');
//     }
// } else {
//     action = function () {
//         console.log('Other action');
//     }
// }

//-----------------------------------------------------


// function as values i.e we can assign to variables


// function sayHello() {
//     console.log('Hello.....')    
// }
// let sayHi = sayHello;

// sayHi();

//-----------------------------------------------------

// function as arg


// function greet(f) {
//     if (f) {
//         f(); return;
//     }
//     console.log('Hello..');
// }

// greet();
// greet(function () { console.log('ola....')});


// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort();
// nums.sort(function (a, b) { 
//     return a - b;
// });
// console.log(nums);


//-----------------------------------------------------

// function as return values


// function teach() {
//     console.log('teaching.....');
//     let learn = function () {
//         console.log('learning....');    
//     }
//     return learn;    
// }

// var learnFunc = teach();
// learnFunc();
// learnFunc();


//-----------------------------------------------------


// function reflect() {
//     console.dir(arguments)
//     return arguments[0];
// }

// console.log(reflect(12,13,14));


// e.g

// function sum() {

//     let i = 0,
//         len = arguments.length,
//         result = 0;

//     while (i < len) {
//         result += arguments[i];
//         i++
//     }
//     return result;
// }



// Quiz

// function getFood() {
//     return "No Food";
// }
// // let getFood=...

// console.log(getFood());

// function getFood(pay) {
//     if(arguments.length==0) return "No Food"
//     return "Pot Biryani";
// }
// // getFood=...

// console.log(getFood());

//-------------------------------------------------


// function func1(a, b) {
//     if (!a) {
//         a = 1;
//     }
//     if (!b) {
//         b = 2;
//     }
//     console.log(a)
//     console.log(b)
// }


// function func1(a, b) {
//     a = a || 1;
//     b = b || 2;
//     console.log(a)
//     console.log(b)
// }

// func1(undefined,20);


// Es6  : function default params


// function func1(a = 1, b = 2) {
//     console.log(a)
//     console.log(b)
// }

// func1(undefined, 20);