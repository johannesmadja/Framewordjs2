'use strict';

const students = [
    "Alain",
    "Jeff",
    "Paul",
    "Amalia",
    "Oswald",
    "Elia",
    "Kery",
    "Rose"
];

/**
 * for ... in : Parcours les propriétés/indices d'un tableau/Object
 */
for(let student in students) {
    console.log(student);
}


/**
 * for ... of : Parcours les valeurs
 */
for(let student of students) {
    console.log(student);
}


const object = {
    firstname : "John",
    lastname : "Doe",
    age : 24
}

for (let person in object) {
   console.log(object[person]);
}