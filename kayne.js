// Sélecteurs
const quotes = document.getElementById("kayne")
const newQuote = document.getElementById("citation")

window.addEventListener("load", function()
{
    fetch("https://api.kanye.rest")
    .then(response => response.json())
    .then(data => {
        //console.log(data.quote)
        quotes.textContent = data.quote
    })

})

//Variables



//Evénements
newQuote.addEventListener("click", function() {
    fetch("https://api.kanye.rest")
    .then(response => response.json())
    .then(data => {
        //console.log(data.quote)
        quotes.textContent = data.quote
    })
})

