## Définition npm

Node package manager : est un gestionnaire de paquets pour l'écosystème Node.js. Il est utilisé pour installer, mettre à jour et gérer les dépendances des projets Node.js. NPM  permet aux développeurs de partager et de rétutiliser des bibliothèques de code (appélées "paquets" ou "module") développés par d'autres, ainsi que de publier leur propres paquets pour être utilisés par la communauté.

## Définition Typescript

* Il s'agit d'un langage de programmation opensource crée par Microsoft

* Il est conçu comme un sur-ensembe typé du JavaScript; ce qui signifie que tout code valide dans Javascript est valide en TypeScript mais l'inverse n'est pas possible.

* Il offre des fonctionnalités supplémentaires qui améliorent le développement et la maintenance des applications JS à grande échelle.

## Les principales fonctionnalités

1. Typage statique : TypeScript permet de définir des types pour les variables, les paramètres de fonction, des valeurs de retour et d'autres éléments du code. Cela permet de détecter les erreurs de typages lors de la phase de développement plutôt qu'à l'exécution, ce qui peut améliorer le fiabilité du code.

2. Prise en charge des fonctionnalités ECMAScript récentes
3. Outils de développement avancés
4. Intégration avec JavaScript existant
5. Ecosystème de prise en charge


## Créer un fichier de configuration 
* Tapez ce code dans la console : 'tsc --init'


## Types de variables en JS pur
- number : les nombres, qu'ils soient entiers ou à virgule
- string : représente les chaînes de caractères
- boolean : représente les valeurs booléennes, c'est-à-dire true ou false
- array : représente un tableau contenant des éléments du même type
- object : représente tout type d'object
- null : représente la valeur 'null'
- undefined : représente la valeur "undefined"

## Types de variables en TypeScript
- any : représente un type non spécifié ou dynamique
- unknown : représente un élément dont on ne connaît pas le type
- enum : représente un ensemble des valeurs nommées (alternative aux constantes)

```js
    const STATUS_PAID = "paid";
    const STATUS_PENDING = "pending";
    const STATUS_DENIED = "denied";

    const enum Status {
        paid = "paid",
        pending = "pending",
        denied = "denied"
    }

    let user1Status : status.paid;
```
    /* Pour désactiver les commentaires on ira dans la section EMIT (ligne 57) */

- tuple : représente un tableau avec un nombre fixe d'éléments de type différent

* créer des types et leurs données des alias
  Ils s'appliquent sur tous les types

```js
type MonType = string
     //type      alias

let person : {
    fname : string,
    lname : string,
    age : number
} : {
    fname : "John",
    lname : "Doe"
    age : 24

}

Pour palier le fait de refaire tout le chemin pour créer un autre object on créera un alias

type Person = {fname : string, lname : string, age : number}
let person : Person = {
    fname : "John",
    lname : "Doe"
    age : 24
}

let person2 : Person = {
    fname : "Alain",
    lname : "Duberger"
    age : 42
}


Les interfaces ne s_utilisent que sur des objects
interface PersonInterface {fname : string};
interface PersonInterface {lname : string}
interface PersonInterface {age : number}
interface PersonInterface {
    sayHello() => void
}

const animal : PersonInterface = {
    fname : "Alain",
    lname : "Duberger"
    age : 42,
    sayHello();
}
```

## Union des Types ( | )
Permet de spécifier qu'un parmaètre est un type de variable, soit un autre. soit number ou string

```js
function add(a: number | string, b: number | string) : number {
    if(typeof a === "string" && typeof b === "string") {
        return parseInt(a) + parseInt(b);
    }else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return -1;
}


let x : number | string | boolean = false ;

```
# Petit test sur l'union des types 

```ts
type Rectangle = {
    x : number, 
    y : number,
}

type Cercle = {
    cx : number, 
    cy : number, 
    cr : number,
}

let shape : Rectangle | Circle {
    x : 23,
    y : 59,
}

```

## LES PARAMETRES OPTIONNELS

```ts
type User = {
    id : number, // id est ici une propriété optionnelle 
    fname : string,
    lname : string,
    age ? : number, //age est ici une propriété optionnelle 
}

let user : User = {
    fname : "Brice",
    lname : "Duvalier",
}

// On mettra l_attribut readonly pour empêcher la modification d'une propriété

type User = {
    readonly id ?  : number, // id est ici une propriété optionnelle et ne peut pas être changé
    fname : string,
    lname : string,
    age ? : number, //age est ici une propriété optionnelle 
}

let user : User = {
    id : 25,
    fname : "Brice",
    lname : "Duvalier",
}

// Alors ce code ne marchera pas : user.id = 23;
```

## LES CLASSES TYPESCRIPT

```ts

/**
 * public : (défaut) permet l'accès à la propriété de partout
 * private : ne permet l'accès que dans la classe
 * protected : permet l'accès dans la classe et dans les enfants de la classe
 */

****** (1) Variable private (privée)

class Person {
    private _fname : string; //propriété | membre | champs de classe
    private _lname : string; //propriété | membre | champs de classe

    constructor(fname:string, lname:string){
        this._fname = fname;
        this._lname = lname;
    }

    get fname():string {
        return this._fname;
    }
}

const p1 = new Person("John", "Doe");
```

* UN RACCOURCI  DU CONSTRUCTEUR POUR LA CREATION DES CLASSES

```ts
class Person {

    constructor(private _fname : string, private _lname : string, private _age : number = 23){

    }

    get fname():string {
        return this._fname;
    }
} 
```
Les variables déclarer privée sont directement données en paramètre au constructeur 

```ts
****** (2) Variable Protected (protégé)

    class Person {
        constructor (protected fname : string, protected lname : string) {
        }

        getFullName():string {
            return `${this.fname} ${this.lname}`;
        }
    }

    class Programmer extends Person{

        constructor (fname : string, lname : string, private languages : string[]) {
            super(fname, lname);
        }

        getLanguages():string {
            return `${this.fname} ${this.lname} maîtrise les languages : ${this.languages.join(", ")}`;
        }

    }
    
    /**
     * 
     * Ici, si la propriété est privée dans le classe parent, elle sera inaccessible dans la classe enfant même avec un getteur ou tout autre méthode
     * 
     * Pour cela, on mettra les propriétés en "protected" dans le classe parent
     */
```

### TYPES GENERIQUES

```ts
function test<T>(arg : T) : T {
    return arg
}

test<number>(5);
test<string>("Hello");

```


## LES CLASSES ABSTRAITES

Une classe abstraite : est un concept de la POO. C'est une classe qui ne peut être instancier directement, c'est-à-dire qu'on ne peut pas créer  d'objects directement à partir de cette classe. Au lieu de cela, elle est conçue pour être utilisée comme une classe à partir de laquelle les autres peuvent hériter.

```ts

abstract class Forme {
    afficher () { // Ici la méthode est totalement implémenter et non abstraite, alors les enfants en hérite.
        console.log("Je suis une forme géométrique");   
    }

    abstract calculerSurface() : number; // Oblige les enfant à implémenter cette méthode
}

class Rectangle extends Forme {
    constructor (
        public longueur : number, 
        public largeur :  number, 
    ) {
        super();
    }

    calculerSurface () : number {
        return this.longueur * this.largeur;
    }
}


class Cercle extends Forme {
    constructor (
        public rayon : number
    ) {
        super();
    }

    calculerSurface () : number {
        return 2 * Math.PI * this.rayon ** 2;
    }
}


class Triangle extends Forme {
    construtor (
        public base : number,
        public hauteur : number, 
    ) {
        super();
    }

    calculerSurface () : number {
        return 0.5 * this.base * this.hauteur;
    }
}


let rect = new Rectangle(2, 5);
rect.afficher();
console.log(rect.calculerSurface());


```

 - Cette classe est impossible à instancier. Mais les classes enfants hériteront toujours des méthodes de cette classe

 - Méthode abstraite : Définir une méthode comme abstraite permet d'obliger les enfants héritant de cette classe à implémenter dans leur classe cette méthode. Elles n'ont pas de corps (pas de code d'implémentation). Ces méthodes sont uniquement déclarées avec leur signatures (nom et paramètres). 
 
 - Au moment de l'héritge : Les sous-classes devront alors implémenter entirèrement la méthode abstraites


 ## CLASSE QUI IMPLEMENTE UNE INTERFACE
Lorsqu'une classe implémente une interface, elle doit fournir une implémentation pour toutes les propriétés et méthodes déclarées dans l'interface

```ts
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
```
Il n'est pas possible ici d'implémenter entièrement une méthode à l'intérieur de l'interface pour la faire hériter aux classes qui l'implémenteront. On se contentera d'une "signature () : valeur de retour"


## DECORATUEUR
C'est une fonction avec des paramètres (trois paramètres pour être précid)

* Les descripteurs 
Ils modifient le comportement par défaut d'un object. Il définit trois propriété : 
 - writable : il spécifie si la propriété peut être modifié après sa création. Si writable vaut false, alors la propriété est considérée comme en lecture seule. Pour changer celle-ci on utilisera une méthode qui prend trois paramètres [ Object.defineProperty (object, nomPropriété, {descripteur})]

    ```js
     let u = {
            fname : "John", 
            lname : "Doe", 
            age : 23
        }

        Object.defineProperty(u, "age", {writable : false});
        console.log(u.age = 20);
    ```

 - enumarable : Il indique si la propriété sera listée lors du parcours de l'object à l'aide d'une boucle "for...in ou Object.keys" 

    ```js
      let u = {
            fname : "John", 
            lname : "Doe", 
            age : 23
        }

        Object.defineProperty(u, "age", {enumerable : false});
        console.log(u);

        for (const key in u) {
                console.log(key);
        }
    ```
 - configurable : si la propriété peut être modifié ou supprimé ultérieurement, et si ses descripteurs peuvent être modifiés. Empêche donc la suppression de propriété
    Le descripteur de la propriété ne peut plus être modifié

 ```js
   let u = {
            fname : "John", 
            lname : "Doe", 
            age : 23
    }

    Object.defineProperty(u, "fname", {configurable: false}); // Empêche le suppression de la propriété ou du descripteur de la propriété

    delete u.fname; // Suppression de la propriété fname
    delete u.lname; // Suppression de la propriété lname

    console.log(u);
 ```

NB : Le décorateur ne s'applique que sur une classe ou dans la classe. On pourra le trouver : 
1. classe                       (décorateur de classe)
2. propriété                    (décorateur de propriété)
3. méthode                      (décorateur de méthode)
4. accesseur (getteur & setter) [décorateur d'accesseur]
5. paramètres d'une méthode     (décorateur de paramètre de méthode)

1. Décorateur de classe : Elle s'applique sur le constructeur de la classe. Au niveau de la fonction "target" représente le constructeur qui est une fonction 

```ts
function decorateur(target:Function) {
    console.log("Appelle du décorateur");
}

@decorateur
class Users {
    constructor() {
        console.log("constructeur de User ....");
    }
}
```

En gros : 

```ts

function decorateur (target : any) {
    console.log("C'est chaud");
}

@decorateur // Décorateur de classe
class User {
    @decorateur // Décorateur de propriété
    private _fname : string
    constructor(fname : string ) {
        this._fname = fname;
     }

    @decorateur // Décorateur de méthode
    greet() {
        console.log(`Salut ${this.name}`);
    }

    @decorateur // Décorateur d'accesseur
    get fname() : string {
        return this._name;
    }

    @decorateur // Décorateur d'accesseur'
    set fname(newfname : string) {
        this._fname = newfname;
    }
}
```

EX : Décorateur de classe scellée

```ts
@sealed 
class BugReport {
    type = "Rapport";
    title : string; 

    constructor(t : string) {
        this.title = t;
    }
}

function sealed (constructor : Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

let obj = new BugReport(" Pas d'accès à internet ");

```