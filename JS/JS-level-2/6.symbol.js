

// let s1=Symbol.for('key1');
// let s2=Symbol.for('key2');
// let s3=Symbol.for('key1');



// let e1={name:'A',[Symbol.for('java')]:'java,spring'}
// let e2={name:'B',[Symbol.for('.net')]:'c#'}
// let e3={name:'C',[Symbol.for('java')]:'java'}


// if(e1[Symbol.for('java')]){
//     console.log('welcome my friend');
// }

// if(e1[Symbol.for('.net')]){
//     console.log('welcome my ??');
// }

//-----------------------------------------------


// var arr=[];


let idMaker = {
    [Symbol.iterator]: function () {
        let idx = 0;
        return {
            next: function () {
                return {
                    value: ++idx > 10 ? undefined : idx,
                    done: idx > 10 ? true : false,
                }
            }
        }

    }
};

// let ids=[...idMaker];
// let [id1,id2,id3]=idMaker;
for( let id of idMaker){
    console.log(id);
}