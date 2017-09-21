


// function getPrice(){
//     return 100.00;
// }

// let getPrice=function(){
//     return 100.00;
// }


// let getPrice = () => {
//     return 100.00;
// }

// let getPrice = () => 100.00+10;
// let getPrice = (count) => 100.00 * count;
// let getPrice = count => 100.00 * count;
// let getPrice = (count,tax) => 100.00 * count + tax;
// let getPrice = (count,tax) => {
//     let cost=100.00 * count;
//     let total=cost+ tax 
//     return total;
// };



// why/where we need function ?


// reason1 : good syntax for func-arg 


// e.g

// let arr=[1,3,5,7,9,2,4,6,8,10];
// arr.sort();

//
// arr.sort(function(a,b){
//     return a-b;
// });

// arr.sort((a,b)=>a-b);

//------------------------------------------

// reason2 : 

/*

    problem with regular-function

    --> can bind that func to any object dynamically


    why we need arrow-function ?

    ==> always bound to creator
    ==> we can't bind arrow-function to any object dynamically

*/


// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");

//         //let self = this;

//         // let askQues = function (ques) {
//         //     console.dir(this);
//         //     console.log(this.name + " answering " + ques);
//         // }

//         let askQues =  (ques) => {
//             console.dir(this);
//             console.log(this.name + " answering " + ques);
//         }

//         console.log('teaching end..');
//         return askQues;
//     }
// }

// let askQues = tnr.doTeach();

// askQues('Q1')

// let newTnr = { name: 'Ria' };
// askQues.call(newTnr,"Q2");


//--------------------------------------------




// let invoice={
//     num:123,
//     process:function(){
//         console.log("INV-"+this.num +" processed");
//     }
// }


// let invoice={
//     num:123,
//     process:()=>{
//         console.log("INV-"+this.num +" processed");
//     }
// }

// let invoice={
//     num:123,
//     process:function(){
//         console.log("INV-"+this.num +" processed partially");
//         let complete=function(){
//             console.log("INV-"+this.num +" processed completely");
//         }
//         return complete;
//     }
// }


// let invoice={
//     num:123,
//     process:function(){
//         console.log("INV-"+this.num +" processed partially");
//         let complete=()=>{
//             console.log("INV-"+this.num +" processed completely");
//         }
//         return complete;
//     }
// }


// invoice.process()();



//-------------------------------------------------


function Person(name, age) {
    this.name = name;
    this.age = age;

    // let self=this;

    //let ageInc=function(){
    //     self.age++;
    //     console.log(self.name+"->"+self.age);
    // }

    // setInterval(ageInc,1000);

    let ageInc = () => {
        this.age++;
        console.log(this.age);
    }

    setInterval(ageInc, 1000);

}

let p = new Person('Ria1', 0);

