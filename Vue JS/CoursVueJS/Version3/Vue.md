							## Vue

/**
* Vue utilise des modèles(templates) semblabes au HTML, mais fais usage "des états".
*/

 * Les états(ou state) sont des variables que l'on utilise dans notre application 
 * A l'intérieur de la fonction createApp(), nous aurons une option data(){} qui devra retourné un object contenant les états(state)

 * * Interpoler : insérer ou introduire du texte qui n'existait pas au préalable

 * La fonction createApp() contient un objec contenant des options qui ici est une fonction data() qui
 * à son tour retourne un object contenant des états

 ## PREMIERE METHODE

<head>
	 <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.global.min.js" integrity="sha512-Wbf9QOX8TxnLykSrNGmAc5mDntbpyXjOw9zgnKql3DgQ7Iyr5TCSPWpvpwDuo+jikYoSNMD9tRRH854VfPpL9A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<div id="app">
    <h1> {{msg}} </h1>
</div>

<script>
        // Fonction permettant de monter l'application
        const { createApp } = Vue;

        // On monte l'application Vue dans la div#app
        createApp({
            // liste des options
            data() {
                return {
                    // vos états (state)
                    msg : "Hello World !"
                }
            }
        }).mount("#app");
</script>



## Seconde Méthode
<!-- Lors de l'importation on utilisera le lien avec "esm-browser.min" sans runtime -->

<script type = "module" >
	import {createApp} from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.runtime.esm-browser.min.js";


        // On monte l'application Vue dans la div#app
        createApp({
            // liste des options
            data() {
                return {
                    // vos états (state)
                    msg : "Hello World !"
                }
            }
        }).mount("#app");
</script>

## Les Directives demandent à vue d'éffectuer une action spéciale

## Interpolation des attributs avec utilisation du " v-bind:attributs:'state' "

## v-bind
* v-bind : nous permet de faire une liaison de l'état avec l'attribut
    <h1 v-bind:class = "titleClass">Donnez-moi une couleur rouge</h1>
Ou enlever le "v-bind" en laissant les ':'
    <h1 :class = "titleClass">Donnez-moi une couleur rouge</h1>


* Lorsqu'on voudra ajouté deux valeurs dans un attribut :
   On donnera un tableau comme valeur à l'attribut
    <h1 v-bind:class = "[titleClass, bgDark]">Donnez-moi une couleur rouge</h1>
<script>
	data() {
        return {
        // vos états (state)
        titleClass : 'title',
		    bgDark : bg-dark,
    }
  }
</script>

* L'élément peut en plus des classes dynamiques, posséder des classes standards
	<h1 class = "third" :class = "[titleClass, bgDark]">Donnez-moi une couleur rouge</h1>

* Le style directement dans la balise HTML
	<h1 :style = "{backgrounkColor : bgDark}">Donnez-moi une couleur rouge</h1>


## DECLARATION DES FONCTIONS
Il nous faut utiliser une options nommée "methods"


## v-on:click
Permet d'écouter un élévenement sur des éléments

<html>

<button v-on:click = "test"> Affiche moi un message</button>

<script>
    createApp({
        // liste des options
        data() {
            return {
                // vos états (state)
                msg : "Hello World !"
            }
        },

		methods : {
        test () {
          alert("Hello World !")
        }
        },
    }).mount("#app");
</script>
</html>

* Il existe également un raccourci pour le "v-on:click"
	<button @click = "countClick">count is: {{ count }}</button>

* On aurait pu se passe de la fonction pour changer la valeur de notre état(state) 
	<button @click = "count++">count is: {{ count }}</button>

* Evènement sur un lien :

<div id="app">
  <!-- make this button work -->
  <button v-on:click = "countClick">count is: {{ count }}</button> <br>
  <a href="" @click = "log">Clique ici</a>
</div>

<script type="module">

	import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.esm-browser.min.js';

	createApp({
	  data() {
	    return {
	      count: 0
	    }
	  },

	  methods : {
	    countClick () {
	      return this.count++
	    },

	    log(event) {
	      event.preventDefault();
	      console.log("Affiche moi ceci 😎");
	    },
	  }
	}).mount('#app');

</script>

Nous avons une alternative au "prevent default" dans la fonction 

<script>
	log() {
    console.log("Affiche moi ceci 😎");
    },

	<a href="" @click.prevent = "log" > Clique ici </a>
</script>

* Pour écouter un événement sur un input

<script type="module">
	import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.esm-browser.min.js';

	createApp({
	  data() {
	    return {
	      text: '',
	      pwd : '',
	    }
	  },

	  methods: {
	    onInput(e) {
	      this.text = e.target.value;
	    },
	  }
	}).mount('#app')
	</script>

<div id="app">
	  <input :value="text" @input="onInput" placeholder="Type here">
	  <p> Affichage de la valeur : {{ text }}</p>

	  <br>

	  <input v-model="pwd" placeholder="Type here" type="password">
	  <p> Affichage du mot de passe : {{ pwd }}</p>
</div>

* v-model : est utiliser sur les formulaires et permet de récupérer les valeurs au niveau de notre formulaire


###### LES OPTIONS EN VUE
  Il existe deux(02) options pour définir les fonctionnalités réactives

## Computed : {}
Utiliser lorsque vous avez besoin de calculer une propriété basée sue les valeurs existantes des propriétés réactives (states | états). Les propriétés calculées sont mises en cache et ne sont recalculées que lorsque leurs dépendances changent. 

ex : 
computed : {
  fullName () {
    return this.firstname  + " " + this.lastName;
  },
  sortedList() {
    return this.list.sort();
  }
}

## methods : {}
Utilisez lorsque vous souhaitez définir des méthodes réutilisables ou lorsque vous devez effectuez une action spécifique en réponse à un évènement. Elles ne sont pas mises en cache et sont recalculées chaque fois qu'elles sont appelées. Elles servent à gérer des évènements, effectuer des appels HTTP ou exécuter des opérations complexes.

ex : 

methods : {
  handleClick() {
    this.counter++;
  },
  fetchDate() {
    // Effectuer une requête HTTP pour récupérer des données   
}

## Les Hooks en Vue JS
Ce sont des options appelées sous forme de fonction

* Chaque application Vue passe par une série d'étapes d'initialisation lorsqu'elle est créée. Il faut : 
 - Récupérer les états, fonctions et propriétés réactives de notre application  ;
 - Compiler le template ;
 - Monter l'instance sur le DOM ;
 - Faire une mise à jour lorsque les données changent
Au cours de tout ceci, les fonctions appelées hooks sont également exécutées, donnant la possibilité d'ajouter son propre code à des étapes spécifiques.


## Une alternative à la récupération des éléments du DOM dans le JavaScript natif
On utilisera 'ref'

<p ref = "test" >Bonjour tout le monde !</p>

createApp({

  methods : {
    start() {
      const paragraph = this.$refs.test;
      paragraph.innerHTML = "Rebonjour tout le monde !";
    }
  },

  mounted() {
    this.start();
  }

});

## Pour éviter l'affichage des moustaches au rafraichissement
  <style>
    [v-cloak] {
      display: none;
    }
  </style>

 <div v-cloak id="app"></div>



## Les watchers
 watch : {
    counter(newValue, oldValue) {
      console.log(`Le compte à changer de ${oldValue} à nouvelle valeur : ${newValue}`);
    }
  }

  La valeur des méthodes à l'intérieur doivent avoir le même nom que les états cibles