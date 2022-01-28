const names = document.getElementById("name")
const liste = document.getElementById("names_liste")

/*window.addEventListener("load", function()
{
    fetch("https://swapi.dev/api/people/1/")
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        names.textContent = data.name
    })
})*/
//methode pour afficher une liste de personnages (methode boucle)
window.addEventListener("load", function()
{
    fetch("https://swapi.dev/api/people/")
    .then(response => response.json())
    .then(data => {
        //console.log(data.results)
        data.results.forEach(result => {
            liste.innerHTML += "<li>" + result.name + "</li>"
        })
    })
})