// Définition de la classe comme type d'une variable
class Recipe {
    name : string = "nothing" ;
    star ? : number;
}

let recipes : Recipe[] = [{name : "Bouillon", star : 3}, {name : "Gombo"}];
console.log(recipes);

// Initialisation d'un tableau de nombre
let notes : number[] = [1, 2, 3]
console.log(notes);




// Définition d'une interface comme type d'une variable
interface Bike {
    name : string;
    type ? : string;
}

let bikes : Bike[] = [];


/*

// Deuxieme méthode

let recipes : Recipe[] = [];
let mockRecipes = [
    { name : "Rilletes de tofu"},
    { name : "champignon", star : 10},
    { name : "Rilletes de tofu"},
    { name : "Rilletes de tofu", star : 5},
]

mockRecipes.forEach((recipe) => {
    recipes.push(recipe);
});


let notes : Array<number> : [];

*/