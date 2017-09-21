

interface Subject{
    learn:()=>void;
}

class Java implements Subject{learn(){}}
class JS implements Subject{learn(){}}

class Story{}

class Trainer<T extends Subject> {
    subject:T;
}



let javaTnr=new Trainer<Story>();
javaTnr.subject=new Java();

javaTnr.subject=new JS();


let jsTnr=new Trainer();
