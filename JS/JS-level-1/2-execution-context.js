


/*

 Execution-Context / scope
 ---------------------------
 
 ==> memory/stack-frame with given args & locals to execute function.
 2 phases
 ----------
    a. creation-phase
        - all variables declared with 'var' keyword any where,
          will get hoisted to top of that context with default value(undefined)
    b. execution-phase
        - instruction will get execute in seq..

-------------------------------------------------


every .js-runtime has one global-context & global-object by default

 global-obj:

    browser --> window
    Node.js --> process

    global-context will get executed by global-obj.

----------------------------------------------------


every function call, also  creates new-context
which is child of in which context that function has declared


*/



// var v = 100;
// console.log(v);

//---------------------------------------

// var v = 100;

// function f1() {
//     console.log(v);
//     var v = 200;
// }

//f1(); // f1-context   <---- global-context

// best-practice : always declare variable at top ( file | function )

//---------------------------------------

// Quiz

//var v = 1;
function f1() {
    function f2() {
        console.log(v);
    }
    //f2(); // f2-context  <--- f1-context
    var v = 2;
    //f2();
    return f2;
}

var f2Func = f1(); // f1-context <-- global-context

// f2Func();// f2-context  <--- f1-context

//-------------------------------------------------


// function f() {
//     //var i = 100;
//     if (true) {
//         var i = 200;
//     }
//     console.log(i);
// }
// f();

//-------------------------------------------------

// var i = 12;
// var i = 13;

//-------------------------------------------------

/*

 problems with 'var' keyword
 
 --> always get hoist
 --> No 'block-scope'
 --> can re-declare same variable within scope

 soln:

 --> using 'let' & 'const' keywords in es6


*/



// console.log(i);
// let i = 12;



// var i = 100;

// {
//     let i = 200;
// }

// console.log(i);


// let i = 100;
// let i = 200;


//--------------------


// const tnr = {
//     name:'Nag'
// }

// tnr.name = "New Tnr";