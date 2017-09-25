


function getF(i) {
    return function () {
        return i;
    }
}

var myFuncs = [];
for (var i = 0; i < 2; i++) {
    
    myFuncs.push(getF(i));

    // myFuncs.push((function (i) {
    //     return function () {
    //         return i;
    //     }
    // })(i));
    
}

console.log(myFuncs[0]());   // 0
console.log(myFuncs[1]());   // 1

