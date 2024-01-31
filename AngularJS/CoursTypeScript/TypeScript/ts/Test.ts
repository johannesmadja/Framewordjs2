//Type de variable en TypeScript

let x:number = 5;
const pi:number = 3.14;
let hex:number = 0xf00d;
let bin:number = 0b001;
let salaire:number = 2_500_358_563;

// String
let color:string = "blue";

// boolean
let isFree:boolean = false;

// array
let arr:number[] = [1, 2, 3];
let arr2:string[] = ["a", "b", "c"];
let arr3:[string, number] = ["a", 2];

// Type de retour de fonction
function add(a:string, b:number) {
    return a + b;
}

/**
 * Il est également possible de spécifier le type de retour de la fonction
 */ 

function add2 (a:number, b:number):number {
    return a + b;
}

// Lorsque la fonction ne retourne rien
function sayHello():void {
    console.log("Hello");
}