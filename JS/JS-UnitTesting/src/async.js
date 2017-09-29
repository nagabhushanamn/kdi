
// function getFood() {
//     let promise = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve('biryani')
//         }, 1000)
//     })
//     return promise
// }

'use strict';

function getFood() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('biryani');
        }, 1000);
    });
    return promise;
}