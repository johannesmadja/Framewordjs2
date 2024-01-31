## La directive v-for

Elle permet de parcourir un tableau pour renvoyer chaque éléments

* v-for='student of students'

* Par convention le 'in' renvoie les indices et le 'of' renvoie la valeur à chaque indice

* La syntaxe du v-for va de paire avec le key (donne un identifiant unique à chaque élément) :

    <ul>
        <li v-for="student of students" :key = "s.id"> {{s.fname}} {{s.lname}} </li>
    </ul>


## Récupérer les indices et les affectés au : key 

    <ul>
        <li v-for="(student, indice) of students" :key = "indice" > {{s.fname}} {{s.lname}} </li>
    </ul>
