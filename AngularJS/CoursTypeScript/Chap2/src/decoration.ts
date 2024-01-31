
// Foncton décorateur de méthode
function decorer(obj : User, method : string, descripteur : PropertyDescriptor) {
    console.log("Appelle de décorateur");
    descripteur.value();
}

class User {
    constructor(
        private name : string = "Golbert",   
    ) { }

    @decorer
    greet() {
        console.log(`Salut ${this.name}`);
    }
}

let u = new User()
// console.log(u.greet());


// Voici un exemple simple d'utilisation d'un décorateur sur une classe en TypeScript

function logClass(target:any) {
    // target fait référence à la classe décorer
    console.log(`Classe ${target.name} a été décorée`);
}

@logClass
class MaClasse {
    constructor () {
        console.log("Instance de la classe crée");
    }
}


/**
 * 
 * @param target référence à la classe décorer
 */ 

function decorateur(target:Function) {
    console.log("Appelle du décorateur");
}

@decorateur
class Users {
    constructor() {
        console.log("constructeur de User ....");
        
    }
}

let ul = new Users();
// console.log(ul);
