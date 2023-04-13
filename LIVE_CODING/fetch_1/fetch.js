const image = document.querySelector("img")
const refreshBtn = document.querySelector("button")
const stopBtn = document.getElementById("stopBtn")

refreshBtn.addEventListener("click", () => {
    interval = setInterval(fetchData,1500)
})

stopBtn.addEventListener("click", () => {
    setTimeout(clearInterval(interval),5000)
})


// (1)
//  fetch restituisce una promise, và concatenato un metodo per ottenere i dati dalla promise:

/* fetch('https://dog.ceo/api/breed/retriever/golden/images/random')
    .then((val) => val.json())                                   // <===     risposta con url di un immagine.jpg dal sito web
    .then((val) =>   {
        image.src = val.message
    })                                                  
    .catch((error) => console.log(error)) */


//  (2)
//  assegnare l'url al tag img dell'index:
//  creare riferimento ad img: 
//                                                               ^
//       "const image = document.querySelector("img")"           |

//  (3)
//  settare il "src" id un immagine:

//    ".then((val) =>   {
//      image.src = val.message
//    })"


//----------------------------------------------------------------------------
//  TRAMITE ASYNC - AWAIT:



    async function fetchData(){
        try {
            const response = await fetch('https://dog.ceo/api/breed/retriever/golden/images/random')
            const data = await response.json()
            image.src = data.message
        }   catch (error) {
            console.log(error)
    }
}



