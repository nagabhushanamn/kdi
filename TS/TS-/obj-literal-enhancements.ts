
let pname = "Nag";
let age = 33;

let person = {
    pname: pname,
    age: age,
    sayName: function () {
        //...
    }
}

let addrType="office";

let newPerson = {
    pname,
    age,
    [addrType+'-address']:'....',
    sayName() {
        //...
    }
}