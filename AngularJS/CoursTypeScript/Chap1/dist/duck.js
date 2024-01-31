"use strict";
class Thing {
    constructor() {
        this.name = "canard";
    }
    swim() {
        return `Nage comme un ${this.name}`;
    }
}
let canard = new Thing();
console.log(canard.swim());
