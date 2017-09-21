


let name="Nag";
let age=33;

// es5

let person={
    name:name,
    age:age,
    sayName:function(){
        console.log('im '+this.name);
    }
};

// es6
let addressType="home";

let newPerson={
    name,
    age,
    [addressType+"-address"]:'some-value',
    sayName(){
        console.log('im '+this.name);
    }
}