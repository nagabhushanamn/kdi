

/*

  1. simple / primitives  ==> values

    a. string
    b. number
    c. boolean
    d. undefined
    e. symbol ( es6 )

  2. complex / reference / user-defined  ==> objects


*/

//-----------------------------------------------

// 1. simple / primitives  ==> values

//-----------------------------------------------
// a. string

var name = "Nag";
var selection = 'a';

//-----------------------------------------------

// b. number

var count = 12;
var cost = 12.12;

//-----------------------------------------------

// c. boolean

var found = true;

// imp-note :

/*

falsy values in .js-lang : ==> false,0,"",null,undefined,NAN

*/

//-----------------------------------------------

// d. undefined

var v;

//-----------------------------------------------



// 2. complex / reference / user-defined  ==> objects


/*

    How to create obj .js-lang ?

    var ref=new Constructor();


    imp-note:

    --> by default , .js-objects are extensible & configurable

*/


var config = new Object();
config.url = "http://..";
config.method = "GET"
config.success = function () { 
    //console.log('success....');
    return "RESULT";
}

//delete config.method;


//-------------------------------------------------

// litral-style objects


// a. Object

var config = {
    url: 'http://',
    method: 'GET',
    success: function () {
        //..
    }
};

//-------------------------------------------------

// b. Array


var menu = new Array();
menu.push('biryani');
menu.push('meals');


// literal style

var menu = ["biryani", "meals"];

//-------------------------------------------------



// C. RegExp


// rex : \d{10}


var re = new RegExp('\\d{10}');

// or literal style


var re = /\d{10}/;

var ssnPattern = new RegExp("\\d{3}-\\d{2}-\\d{4}");

var ssnPattern=/\d{3}-\d{2}-\d{4}/;




//-------------------------------------------------

// d. Function

var add = new Function("n1", "n2", "var r=n1+n2;return r;");

// or literal style

function sum(n1, n2) {
    var r = n1 + n2;
    return r;
}

//------------------------------------


// how to access obj's properties ?

/*

    --> '.' notation , for valid indentifieer property
    else
    --> '[ ]' notation

*/

var person = {
    name: 'Nag',
    'full-name':'Nag N'
}

person.name = "raj";
person['full-name'] = "babu raj";

console.log(person.name);
console.log(person['full-name']);



