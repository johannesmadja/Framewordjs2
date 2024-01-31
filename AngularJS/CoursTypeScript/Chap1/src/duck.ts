// Définition de l'interface <=> contrat
interface Duck {
    name : string; 
    swim() : string;
}

class Thing implements Duck {
    name : string = "canard";
    swim() {
        return `Nage comme un ${this.name}`;
    }
}

let canard = new Thing();
console.log(canard.swim());
