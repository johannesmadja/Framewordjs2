let app = new Vue({
    el:'#app',
    data : {
        message : "bonjour",
        nom : "Duvalier",
        prenom : "Pascal",
        profession : "Programmeur Informatique",
        age :   20,

        note : {
            Pascal : 18,
            Naomi : 10,
            Harvey : 15,
            Bailly : 12
        },

        notes : [12, 15, 18, 05],


        seen : true
    }
});