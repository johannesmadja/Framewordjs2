'use strict';
// définition de la classe
class Product {
    constructor(name) {
        this._ref = 1000;
        this._name = name;
    }
    // setter name
    set name(name) {
        this._name = name;
    }
    // getter name
    get name() {
        return this._name;
    }
    // setter _ref
    set ref(ref) {
        this._ref = ref;
    }
    // getter _ref
    get ref() {
        return this._ref;
    }
}
let bike = new Product("Super Bike");
const rect = {
    height: 35,
    width: 50
};
;
const animal = {
    name: "Booba",
    specie: "ours",
    legs: 4
};
// Pour les variables private 
class Person {
    constructor(fname, lname) {
        this._fname = fname;
        this._lname = lname;
    }
    get fname() {
        return this._fname;
    }
}
const p1 = new Person("John", "Doe");
// console.log(p1.fname);
// Pour les variables protected 
class Person2 {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
}
class Programmer extends Person2 {
    constructor(fname, lname, languages) {
        super(fname, lname);
        this.languages = languages;
    }
    getLanguages() {
        return `${this.fname} ${this.lname} maîtrise les languages : ${this.languages.join(", ")}`;
    }
}
const p2 = new Programmer('Jack', "Bauer", ["HTML", "CSS", "JAVASCRIPT"]);
console.log(p2.getLanguages());
