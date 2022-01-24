// Sélecteurs
const compteur = document.getElementsByTagName("h1")[0]
const plus = document.getElementById("+")
const moins = document.getElementById("-")
const reset = document.getElementById("reset")

//Variables
let compte = 0



//Evénements

plus.addEventListener("click", function(){
    compte++
    compteur.textContent = compte
    if (compte >= 0){
        compteur.style.color="blue"
     }
})
moins.addEventListener("click", function(){
    compte--
    compteur.textContent = compte
    if (compte < 0){
        compteur.style.color="red"
     } 
})
reset.addEventListener("click", function(){
    compte = "0"
    compteur.textContent = compte
    compteur.style.color="black"
})

