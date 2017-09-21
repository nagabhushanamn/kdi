


// Model
let tnr = { name: 'Nag' }

// service
let tnrService = {
    doTeach: function () {
        console.dir(this);
        console.log(this.name +" teaching .js");
    }
}

// View
// on click-event in teach-btn , run tnrService by above tnr
let teachBtn=document.querySelector('.btn-primary');

// teachBtn.addEventListener('click',function(){
//     tnrService.doTeach.call(tnr);
// });

// or

teachBtn.addEventListener('click',tnrService.doTeach.bind(tnr))

