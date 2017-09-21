
/*

    how to implement inheritance in .js-lang?

     --> using prototypes


     child-obj  ------> parent-obj ( prototype )

*/


function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.sayName = function () {
    //     console.log('im '+this.name);
    // }    
    // this.sayAge = function () {
    //     console.log('im '+this.age +" old");
    // }
}
Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " old");
}

let p1 = new Person("Nag", 33);
let p2 = new Person("Ria", 2);

//-------------------------------------------


// let o1={a:10}
// let o11=Object.create(o1);

//---------------------------------------------


// function Employee(name,age,salary){
//     Person.call(this,name,age);
//     this.salary=salary;
// }
// Employee.prototype=new Person();
// Employee.prototype.saySalary=function(){
//     console.log('i get '+this.salary);
// }

// let e1=new Employee('Nag',33,1000.00);


//---------------------------------

//Es6
