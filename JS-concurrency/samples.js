

// #1

// function foo(b) {
//   var a = 10;
//   return a + b + 11;
// }

// function bar(x) {
//   var y = 3;
//   return foo(x * y);
// }

// console.log(bar(7));

// #2

// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz();


// #3


// function foo(){ throw new Error('oops')}
// function bar(){foo()}
// function baz(){bar()}
// baz();


// #4

// function foo(){
//     foo();
// }
// foo();


// #5

// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log('hungry...');
//         i++;
//     }
// }

// function shortRunning(){
//     console.log('short logic..');
// }

// longRunning();
// shortRunning();



//-------------------------------------------


// on event , how .js functions are running ?


/*

    <button class="veg">veg</button>
    <button class="nonveg">non-veg</button>

*/


// console.log('start...');
// $.on('.veg','click',function vegHandler(e){
//     console.log('handling click-event on .veg elements');
// });

// $.on('.nonveg','click',function nonVegHandler(e){
//     console.log('handling click-event on .nonveg elements');
// });
// console.log('cont with other work if exist..');


// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log('hungry...');
//         i++;
//     }
// }
// longRunning();


//--------------------------------------------



console.log('start...');

// on event
setTimeout(function(){
    console.log('after timeout..');
},2000);

console.log('cont with other work if exist..');

function longRunning(){
    var i=0;
    while(i<10){
        console.log('hungry...');
        i++;
    }
}
longRunning();
