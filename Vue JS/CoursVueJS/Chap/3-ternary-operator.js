'use strict';


/**
 * Fonction qui vérifie si une nombre est positif ou négative
 * @param {number} num 
 * @returns true | false
 */
function isPositive(num) {
    /*
    if (num >= 0) {
        return true;
    }else {
        return false;
    }
    */

    return num >= 0 ? `${num} est positif` :  `${num} est négatif` ;
    // num >= 0 ? "num est positif" : 
}

console.log(isPositive(-3));