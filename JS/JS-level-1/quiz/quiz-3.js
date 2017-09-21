

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        let notes = '.js-notes';
        let self=this;
        function doLearn() {
            console.log(this.name +' learning .js from ' + self.name);
        }
        //doLearn();
        let emp={name:'kongs'};
        doLearn.call(emp);
        console.log('teaching end...');
    }
}

tnr.doTeach();

let newTnr={name:'Ria'};
tnr.doTeach.call(newTnr);