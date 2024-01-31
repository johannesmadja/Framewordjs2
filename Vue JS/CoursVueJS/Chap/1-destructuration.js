'use strict';

/*
// ---> Syntaxe ES6 <---
const notes = [17, 14, 12, 13];
const nicole = notes[0];
const erfero = notes[1];
const oderic = notes[2];
const martin = notes[3];
*/

// ---> Syntaxe ES6 <---

// Sur les tableaux
const notes = [17, 14, 12, 13];
const [nicole, erfero, oderic, martin] = notes;

const notes2 = [17, 14, 12, 14];
const [paul, saul, , rose] = notes2;

// Sur les objects
const person = {
    firstname : "John",
    lastname : "Doe",
    age : 24
}

const { age, lastname, firstname } = person; // Récupère la propriété "age" que tu stockes dans une variable nommée "age"
const {age : a, lastname : ln, firstname : fn} = person // Pour renommer le nom des variables contenant désormais la valeur des propriétés