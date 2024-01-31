'use strict';

// définition de la classe
class Product {
    private _name:string;
    protected _ref:number = 1000;

    constructor(name:string) {
        this._name = name;
    }

    // setter name
    set name(name : string) {
        this._name = name;
    }

    // getter name
    get name():string {
        return this._name
    }

    // setter _ref
    set ref(ref : number){
        this._ref = ref;
    }

    // getter _ref
    get ref():number {
        return this._ref;
    }
}

let bike = new Product("Super Bike");

// console.log(bike.name);
// console.log(bike.name = "Super Car");

/**
 * 
type UserType = {
    fname : string,
    lname : string,
    age : number
};


let user: UserType = {
    fname : "John",
    lname : "Doe",
    age : 24
}
 */

type RectDimension = {
    height : number,
    width : number
}

const rect: RectDimension = {
    height : 35,
    width : 50
}

// Les interfaces sont seulement pour les objects 
interface Animal {
    name : string,
    specie : string, 
    legs : Number;
};

const animal :Animal = {
    name: "Booba",
    specie : "ours",
    legs : 4
}

// Pour les variables private 
class Person {
    private _fname : string; //propriété | membre | champs de classe
    private _lname : string; //propriété | membre | champs de classe

    constructor(fname:string, lname:string){
        this._fname = fname;
        this._lname = lname;
    }

    get fname():string {
        return this._fname;
    }

}   

const p1 = new Person("John", "Doe");
// console.log(p1.fname);


// Pour les variables protected 

class Person2 {
    constructor (protected fname : string, protected lname : string) {}

    getFullName():string {
        return `${this.fname} ${this.lname}`;
    }
}

class Programmer extends Person2{

    constructor (fname : string, lname : string, private languages : string[]) {
        super(fname, lname);
    }

    getLanguages():string {
        return `${this.fname} ${this.lname} maîtrise les languages : ${this.languages.join(", ")}`;
    }
}

const p2 = new Programmer('Jack', "Bauer", ["HTML", "CSS", "JAVASCRIPT"]);
console.log(p2.getLanguages());

/** 
function add <TypeVariable> (a:TypeVariable, b:TypeVariable) : TypeVariable {
    return a + b;
}
*/