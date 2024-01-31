'use strict';


let tabTask = [];
let liTableau = [];
let clickCount = 0;

document.addEventListener("DOMContentLoaded", function () {
    const ul = document.getElementById("updatelist");
    const input = document.getElementById("inputlist");
    const defaultText = document.querySelector("section >  p");

    input.addEventListener("keydown", eventOnTask);


    /**
     * Fonction qui doit vérifier le input et ajouter les tâches
     * @param {"évenement"} event évenement ajout task
     */
    function eventOnTask(event) {
        if (event.key === "Enter" && input.value !== "") {
                addTasks();
                defaultText.style.display = 'none';
                input.value = "";
        } else if (tabTask.length === 0) {
             defaultText.style.display = "block";
        } 
            
        }


    /**
     * Fonction qui ajoute les tâches
     */
    function addTasks() {
    
        // Création des li task à insérer dans la DOM
        let li = document.createElement("li");
        let spanText = document.createElement("span");

        // Ajout de la inputValue au tableau
        tabTask.push(input.value);
    
        // Insertion de la valeur dans le li
        spanText.innerHTML = tabTask[tabTask.length - 1];
    
        // Injection de la tache dans le DOM
        liTableau.push(li);
        console.log(liTableau);
        ul.append(li);


        // Création d'une span pour le bouton de suppression et l'icone de validation
        let spanButton = document.createElement("span"); // icone de validation
        let span = document.createElement("span"); // Bouton de suppression

        // Ajout d'une classe aux span crées
        spanButton.classList.add("spanbefore");
        span.classList.add("cross");

        // Insertion du symbole dans la span
        span.innerHTML = "&#9932;";

        // Injection des spans dans le li
        li.appendChild(spanButton);
        li.appendChild(spanText);
        li.appendChild(span);
    
        // Ecoute de l'évènement click sur le li
        li.addEventListener('click', function () {
            clickCount++;
            if (clickCount % 2 === 1) {
                spanButton.classList.add("validate");
                spanText.classList.add("checked");
                console.log(getComputedStyle(liTableau[0].childNodes[1]));
            }else if (clickCount % 2 === 0) {
                spanButton.classList.remove("validate")
                spanText.classList.remove("checked");
            }
        });

        // Ecoute de l'évènement click sur la span delete
        span.addEventListener("click", function () {
            li.remove();
        });

        
        // Les évènements de filtrage
        const filterButton = document.querySelectorAll("button");
        filterButton[0].addEventListener("click", function () {
            liTableau.forEach(function (element) {
                element.style.display = "block";
            });
        });

        filterButton[1].addEventListener("click", function () {
            liTableau.forEach(function (element) {
                if ( getComputedStyle(element.childNodes[1]).textDecorationLine !== "none") {
                    element.style.display = "none";
                }else {
                    element.style.display = "block";
                }
            });
        });

        filterButton[2].addEventListener("click", function () {
            liTableau.forEach(function (element) {
                if ( getComputedStyle(element.childNodes[1]).textDecorationLine === "line-through") {
                    element.style.display = "block";
                }else {
                    element.style.display = "none";
                }
            });

        });

    }

    
});




