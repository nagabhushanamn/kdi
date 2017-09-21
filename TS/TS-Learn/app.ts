

/*
      -> car : move()
      -> wheel : rotate()
*/


//------------------------------------------------------ 

interface Wheel {
    rotate: () => void
}

//  MRF - company
class MRFWheel implements Wheel {
    rotate() {
        console.log('MRF Wheel rotating....');
    }
}
// CEAT - company
class CEATWheel{
    rotate() {
        console.log('CEAT Wheel rotating....');
    }
}

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

class Car {
    
    // private wheel: Wheel;
    // constructor(wheel: Wheel) {
    //     this.wheel = wheel;
    // }

    constructor(private wheel:Wheel){}

    move() {
        this.wheel.rotate();
        console.log('Car moving....');
    }
}
//------------------------------------------------------ 

let mrfWheel: Wheel = new MRFWheel();
let ceatWheel: Wheel = new CEATWheel();

let car = new Car(ceatWheel);
car.move();


