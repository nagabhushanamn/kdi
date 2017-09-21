

/*

    this ==> owner of current execution-context

*/

// Ques ( why we need 'this' keyword )

// let pName = "GLOBAL";

// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "LOCAL";
//         console.log('im ' + pName); // context's hierarchy data
//         console.log('im ' + person.pName); // obj's data
//         console.log('im '+this.pName); // context's Owner Name
//     }
// }

// // person.sayName();

// let oldPerson = person;
// person = { pName: 'Ria' };

// oldPerson.sayName();


//----------------------------------------------------------------


 /*

        a. static function-binding
        b. dyanmic function-binding

 */


// a. static function-binding



// let p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name) } };
// let p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name) } };


// function sayNameForAll() {
//     console.log('im '+this.name);
// }

// let p1 = { name: 'Nag', sayName:sayNameForAll };
// let p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im ? // function-invocation ( this ==> global-obj)
// p1.sayName(); // im Nag  // method-invcation    ( this ==> invoker-obj)
// p2.sayName(); // im Ria




// b. dyanmic function-binding

// let greetLib = {
//     name:'Lib',
//     sayName: function (message,from) {
//         console.log(message+' im '+this.name +" : "+from);
//     }
// }


// let p1 = { name: 'Nag' }
// let e1 = { name: 'EMP' }



// 
// greetLib.sayName();

// way-1 :
// greetLib.sayName.call(p1,"Hello","CHN");
// greetLib.sayName.call(e1,"Hey","UNIVERSE");

// way-2
// greetLib.sayName.apply(p1,["Hello","CHN"]);
// greetLib.sayName.apply(e1,["Hey","UNIVERSE"]);


// way-3:

// let f = greetLib.sayName.bind(p1, "Hello", "CHN");
// // f();
// // f();

// let ff = greetLib.sayName.bind(e1,"Hey");
// ff('BLR');
// ff('SING');

//--------------------------------------------------




function Person(name,age) {
    this.name = name;
    this.age = age;

    this.sayName = function () {
        console.log('im '+this.name);
    }    
    this.sayAge = function () {
        console.log('im '+this.age +" old");
    }
}

let p1 = new Person("Nag");
let p2 = new Person("Ria");

//..


//-------------------------------------------


// in .js-lang , we can invoke in 4 ways


/*

    1. function invocation  ( this ==> global-obj)
    2. method-invocation    ( this ==> invoker-obj)
    3. call/apply/bijnd invocation (this ==> arg-obj)
    4. constructor invocation ( this ==> new-obj)

*/