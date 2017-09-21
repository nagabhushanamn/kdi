

/*

    module-1  
    ---------

class's hierarchy
    
   Top-Level    : Interface ( 100% abstraction)
   Middle-Level : Abstract Class ( optional , if inheritance exist)
   Bottom-Level : concrete-class(s) ( implementation(s) )



*/

interface Collection {
    
    clear: () => void
}
interface List extends Collection {
    addByIndex: (i: number, s: string) => void
}
//---------------------------------------------

abstract class AbstractList implements List{
    clear(){}
    abstract add(s: string) : void
    abstract addByIndex(i: number, s: string): void
}

//---------------------------------------------

class ArrayList extends AbstractList{
    add(s:string){}
    addByIndex(idx:number,s:string){}
}

class LinkedList  extends AbstractList{
    add(s:string){}
    addByIndex(idx:number,s:string){}
}