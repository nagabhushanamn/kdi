

let swiggy = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log('swiggy resolving/reject promise ');
                resolve('Pot Biryani');
                //reject('Sorry');
            },5000);
        });
        return promise;
    }
}


let bar = {
    getBeer: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log('bar resolving/reject promise ');
                resolve('KF beer');
                //reject('No KF-beer');
            },1000);
        });
        return promise;
    }
}


let person = {
    doWork: function () {
        console.log('person working...');
        console.log('person feels hungry , request food on swiggy');
        let promise1 = swiggy.getFood();
        let promise2 = bar.getBeer();
        console.log('person got promise, deferring my actions to future');
        
        Promise.race([promise1,promise2]).then((success) => {
            console.log('yummy ' + success);
        }, (error) => {
            console.log('oops ' + error);
        });
        console.log('cont.. with further work...end.');

    }
};

person.doWork();