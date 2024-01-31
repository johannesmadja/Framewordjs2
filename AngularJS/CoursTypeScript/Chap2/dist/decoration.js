"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Foncton décorateur de méthode
function decorer(obj, method, descripteur) {
    console.log("Appelle de décorateur");
    descripteur.value();
}
class User {
    constructor(name = "Golbert") {
        this.name = name;
    }
    greet() {
        console.log(`Salut ${this.name}`);
    }
}
__decorate([
    decorer
], User.prototype, "greet", null);
let u = new User();
// console.log(u.greet());
// Voici un exemple simple d'utilisation d'un décorateur sur une classe en TypeScript
function logClass(target) {
    // target fait référence à la classe décorer
    console.log(`Classe ${target.name} a été décorée`);
}
let MaClasse = class MaClasse {
    constructor() {
        console.log("Instance de la classe crée");
    }
};
MaClasse = __decorate([
    logClass
], MaClasse);
/**
 *
 * @param target référence à la classe décorer
 */
function decorateur(target) {
    console.log("Appelle du décorateur");
}
let Users = class Users {
    constructor() {
        console.log("constructeur de User ....");
    }
};
Users = __decorate([
    decorateur
], Users);
let ul = new Users();
// console.log(ul);
