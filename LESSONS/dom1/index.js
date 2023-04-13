//CREATING NEW DOM ELEMENTS by pressing a button



async function loadDogImage(){
    let response = await fetch('https://dog.ceo/api/breeds/image/random')
    let json = await response.json()
    let url = json.message
    //punto all'elemento in cui voglio creare nuovi html tags
    let container = document.getElementById('dog-container')
    //  creo un nuovo elemento "img"
    let img = document.createElement("img")
    //  imposto dimensioni elemento "img" e da dove deve prendere l'url
    img.height = "400"
    img.width = "400"
    img.src = url
    //aggiungo a container il nuovo elemento "img" 
    container.appendChild(img)
}