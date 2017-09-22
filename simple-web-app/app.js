


// using DOM API

// document.addEventListener('DOMContentLoaded',function(){

//     // query DOM
//     let alertBox = document.querySelector('.alert-info');
//     let hideBtn = document.querySelector('.btn-danger');
//     let showBtn = document.querySelector('.btn-primary');

//     // bind event-listeners
//     hideBtn.addEventListener('click', function (event) {
//         alertBox.style.display = 'none';
//     });
//     showBtn.addEventListener('click', function (event) {
//         alertBox.style.display = '';
//     });

// })

//--------------------------------------------



// using jQuery with DOM API

$(document).ready(function () {
    let box = $('.alert-info')
    $('.btn-danger').click(function () {
        box.hide(3000)
    });
    $('.btn-primary').click(function () {
        box.show(3000)
    });
});

//---------------------------------------------

