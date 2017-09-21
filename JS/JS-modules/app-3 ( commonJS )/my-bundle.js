(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

console.log('-index.js-');

let greet=require('kongs-greet');

greet.sayHello('en');
greet.sayName();
},{"kongs-greet":4}],2:[function(require,module,exports){


function greet(){
    console.log('hello..');
}

module.exports=greet;
},{}],3:[function(require,module,exports){


function greet(){
    console.log('ola..');
}

module.exports=greet;
},{}],4:[function(require,module,exports){

let en=require('./en');
let es=require('./es');

// console.log('hello...');

let message = "hello..";

function sayHello(lang) {
    if(lang==="en"){
        en();
    }
    if(lang==="es"){
        es();
    }
    console.log('hello maga');
}
function sayName(){
    console.log('im greet.js module');
}

// sayHello();

// module.exports=sayHello;
module.exports={
    sayHello,
    sayName
};
},{"./en":2,"./es":3}]},{},[1]);
