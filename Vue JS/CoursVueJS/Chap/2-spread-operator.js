'use strict';

/**
 * L'opérateur spread (...) en JavaScript permet de copier rapidement tout ou une partie d'un tableau|object 
 * dans un autre tableau|objet
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];

console.log(...arr2);

const tableau = [[1, 2, 3], 4, 5, 6];
const tableau2 = [...tableau[0]];


const tab = [5, 8, 10]
const tab2 = tab.concat("Peter");
console.log(tab2);

console.log([...'bonjour']);


// Rest parameter : ...args prend le reste des paramètres
function add(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}

add(1, 2, 3, 4, 5, 6, 7);

function sortTable(arr) {
    let arr2 = arr.split('').sort((a, b) => {return b - a});
    return arr2.join('');
}

console.log(sortTable('548963217'));