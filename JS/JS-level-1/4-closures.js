/*


*/



/*

A closure is a function having access to the parent scope,
even after the parent function has closed.

 why/where we need them ?

  -> to abstract public behav of any module
  -> while executing func async , to access parent scoped data

*/

// function teach(sub) {
//     console.log('teaching ' + sub);
//     let story = 'bla bla';
//     let notes = sub + "-notes";
//     function learn() {
//         console.log('learning with '+notes);
//     }
//     //learn();
//     console.log('teaching end..');
//     return learn;
// }


// let learnFunc = teach('.js'); // teach-context with args & locals
// learnFunc();

//-------------------------------------------------------------

// use-1 :  to abstract public behav of any module



// module :  counter-module  : doCount() , getCount()


// function init() {
//     var count = 0; // private
//     function doCount() {
//         count += 1;
//     }
//     function getCount() {
//         return count;
//     }
//     return {
//         inc: doCount,
//         get: getCount
//     };
// }

// var counter = init();


//--------------------------------------------------


// module pattern :  IIFE or self-executable function

// const counter = (function () {

//     var count = 0; // private
//     function doCount() {
//         count += 1;
//     }

//     function getCount() {
//         return count;
//     }
//     return {
//         inc: doCount,
//         get: getCount
//     };

// })();


//-----------------------------------------------


// use-2 : -> while executing func async , to access parent scoped data


function start() {
    var count = 0;
    setInterval(function () { 
        count++;
        console.log(count);
    },1000);
}
start();