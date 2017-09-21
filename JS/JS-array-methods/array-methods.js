

let products = [
    { id: 4567, name: 'Item1', price: 4000 },
    { id: 9876, name: 'Item2', price: 2000 },
    { id: 1235, name: 'Item3', price: 1000 },
    { id: 5687, name: 'Item4', price: 7000 },
    { id: 8756, name: 'Item5', price: 3000 }
];

let resultArray;

//-----------------------------------------------
// arr.filter(fn)

// resultArray=products.filter(item=>item.price>5000);
// display(resultArray);
//-------------------------------------------------
// arr.map(fn)

// resultArray = products.map((item, idx) => item.price);
// display(resultArray);

//------------------------------------------------

function display(result) {
    // forEach
    result.forEach((item, idx) => {
        console.log(item);
    });
}

//-------------------------------------------------

// arr.reduce()

// let total=products.reduce(function(acc,item){
//     console.log(item);
//     console.log(acc);
//     return acc+item.price;
// },0);
// console.log(total);

//-------------------------------------------------

// arr.every() , arr.some()


// let b=products.every(item=>item.price>100);
// let b=products.some(item=>item.price>7000);
// console.log(b);

//-------------------------------------------------

// arr.splice()

// products.splice(2,1);
// display(products);

//-------------------------------------------------

// resultArray=products.slice(0,2);
// display(products);
// console.log('-');
// display(resultArray);

//-------------------------------------------------

// let i=products.findIndex(item=>item.id===1235);
// let i=products.find(item=>item.id===1235);
// console.log(i);

//-------------------------------------------------