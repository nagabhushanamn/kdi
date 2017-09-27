

/*

    problems with 'var' keyword

    --> they always get hoist top top of context
    --> no block-scope for variables.
    --> we can re-declare same var multiple times within context

    soln:

    using 'let' & 'const' keywords

*/


// console.log(v);
// let v=12;

//----------------------------------

// let v=12;
// {
//     let v=13;
// }
// console.log(v);

//----------------------------------

// let v=12;
// let v=13;


//----------------------------------

// const config = {
//     url: 'http://'
// };

// // config = null;
// config.url="ftp://"

//----------------------------------