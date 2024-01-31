'use strict';

document.addEventListener("DOMContentLoaded", function () {
    //  Récupération des éléments du DOM
    const input = document.getElementById("inputlist");
    const updatelist = document.getElementById("updatelist");

    // Initialisation du compteur du click
    let clickCount = 0;

    // Ajout de l'évènement keydown sur l'input à l'appui de la touche Entrer
    input.addEventListener("keydown", function (event) {
       
        if (event.key === "Enter") {
            event.preventDefault();
            
    class Enter {
        constructor(completed, id, title) {
            this.completed = completed;
            this.id = id;
            this.title = title;
        }

        generateIdentifiant () {
            return this.id = Math.random() * 1000;
        }

        
    }

    let obj = new Enter(false, this.generateIdentifiant(), input.value);
    console.log(obj);

            // let newWork = document.createElement("p");

            // newWork.innerHTML = "<input type = 'checkbox' value = 'tache' style = 'margin-right : 1rem' id = 'hideitems'>";
            // newWork.style.padding = "1.5rem 0rem 1.5rem 1rem";
            // newWork.style.borderBottom = "1px solid #ccc";
            // newWork.style.marginBlock = "0px";
            // newWork.style.position = "relative";

            // newWork.innerHTML += input.value;
            // updatelist.appendChild(newWork);
          
            // // Insertion de l'icone de suppression
            // newWork.innerHTML += "<i class = 'cross fas fa-times'><i/>";
        
            // // Récupération de l'icone de suppression
            // const deleteCross = document.querySelector(".cross");

            // // Récupération du input checkbox
            // let hideButton = document.getElementById("hideitems");

            // // Ajout de l'évènement click sur le checkbox
            // hideButton.addEventListener("click", function () {
            //     clickCount++;
            //     if (clickCount % 2 === 1) {
            //         newWork.style.textDecoration = "line-through";
            //     }else if (clickCount % 2 === 0) {
            //         newWork.style.textDecoration = "none";
            //     }
            // });

            // // Ajout de l'évènement click sur le button de suppression
            // deleteCross.addEventListener("click", function () {
            //     newWork = this.parentElement;
            //     newWork.remove();
            // });
        }
    });


    class Enter {
        constructor(completed, id, title) {
            this.completed = completed;
            this.id = id;
            this.title = title;
        }

        generateIdentifiant () {
            return this.id = Math.random() * 1000;
        }

        
    }

   
   

});