

// a. array destructuring

// let arr=[10,20,30];

// let min=arr[0];
// let avg=arr[1];
// let max=arr[2];

// let [min,avg,max]=arr;


//---------------------------

// let arr=[10,20];
// let [min,avg,max]=arr;
// let [min,avg,max=50]=arr;

//---------------------------

// let arr=[10,20,[30,40]];
// let [min,avg,[max1,max2]]=arr;



// let arr=[10,20,30];

// let min;
// let avg;
// let max;

// [min,avg,max]=arr;

//-------------------------

// let arr=[10,20,30];
// let [min,,max]=arr;


//----------------------------------------------


// b. object destruturing

let person={
    name:'Nag',
    age:33
}

// let name=person.name;
// let age=person.age;

// let {age,name}=person;
// let {name:myName,age:myAge}=person;

let myName;
let myAge;

({name:myName,age:myAge}=person);





