

// rest operator


// function func(a,...rest){
//     // console.log(a);
//     // console.dir(arguments);
//     console.log(Array.isArray(rest));
//     console.log(rest);
// }

// func(1,2,3);


//------------------------------

// spread operator


// function func(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums=[10,20,30]
// //func(nums[0],nums[1],nums[2]); // manual
// func(...nums);


let a=[1,2,3];
let b=[7,8,9];

let str="nag";

let c=[...a,4,5,6,...b,...str];


// imp-note : any iterable obj , is spreadable



