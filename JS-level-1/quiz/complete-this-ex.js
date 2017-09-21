function sessionStart() {
    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching .js");
            let self = this;
            let doLearn = function () {
                console.log(this.name + " learning .js from " + self.name);
            }
            return doLearn;
        }
    }
    function Employee(name) {
        this.name = name;
    }
    let tnr = new Trainer('Nag');  // constructor invocation
    let tnr2 = new Trainer('Ria');  // constructor invocation
    let e1 = new Employee('A');
    let e2 = new Employee('B');
    let doLearn1 = tnr.doTeach(); // method invocation
    let doLearn2 = tnr2.doTeach(); // method invocation
    doLearn1.call(e1); // call/apply/bind invocation
    doLearn2.call(e2);
}

sessionStart();  // function invocation