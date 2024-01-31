 'use strict';

abstract class Music {
    protected _instrument: string = "nothing";
    abstract makeSound() : string;


    play(): string {
        return 'play music';
    }
}

// classe étendue

class Guitar extends Music {

    constructor () {
        super();
        this._instrument = "Guitar";
    }
   
   makeSound() {
    return `Make sound with ${this._instrument}`;
   };

    // getter de l'instrument
    get instrument() {
        return this._instrument;
    }
}

let instrumentObject = new Guitar();
console.log(instrumentObject.instrument);
console.log(instrumentObject.makeSound());




/** 
//  Définition d'une interface
interface Duck {
    name : string;
    swin(): string;
}

class Thing implements Duck {
    
}

*/