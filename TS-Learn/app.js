/*
      -> car : move()
      -> wheel : rotate()
*/
//  MRF - company
var MRFWheel = /** @class */ (function () {
    function MRFWheel() {
    }
    MRFWheel.prototype.rotate = function () {
        console.log('MRF Wheel rotating....');
    };
    return MRFWheel;
}());
// CEAT - company
var CEATWheel = /** @class */ (function () {
    function CEATWheel() {
    }
    CEATWheel.prototype.rotate = function () {
        console.log('CEAT Wheel rotating....');
    };
    return CEATWheel;
}());
// Car - company
/*

    design & performance issues

    -> tight-coupling.....
    -> too many dependency instances created & destructed..
    -> Unit Testing not possible


    y these issues ?

    => dependent itself creating it's own dependency

    soln:

    --> dont create , do lookup

    lomitation on lookup :

    --> location tight-coupling

    best soln :

    --> dont create,lookup , get/inject by third-party ( IOC )

        how to implememnt this IOC ?

        => dependency Injection ( DI )

            -> constructor DI
            -> setter DI

    -----------------------------------------
    S — Single responsibility principle
    O — Open closed principle
    L — Liskov substitution principle
    I — Interface segregation principle
    D — Dependency Inversion principle

    ------------------------------------------
*/
var Car = /** @class */ (function () {
    function Car(wheel) {
        this.wheel = wheel;
    }
    Car.prototype.move = function () {
        this.wheel.rotate();
        console.log('Car moving....');
    };
    return Car;
}());
//------------------------------------------------------ 
var mrfWheel = new MRFWheel();
var car = new Car(new CEATWheel());
car.move();
