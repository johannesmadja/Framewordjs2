'use strict';
class Music {
    constructor() {
        this._instrument = "nothing";
    }
    play() {
        return 'play music';
    }
}
// classe étendue
class Guitar extends Music {
    constructor() {
        super();
        this._instrument = "Guitar";
    }
    makeSound() {
        return `Make sound with ${this._instrument}`;
    }
    ;
    // getter de l'instrument
    get instrument() {
        return this._instrument;
    }
}
let instrumentObject = new Guitar();
console.log(instrumentObject.instrument);
console.log(instrumentObject.makeSound());
