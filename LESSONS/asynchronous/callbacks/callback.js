// ASYNCHRONOUS CALLBACK

// la gestione asincrona di js permette di eseguire un codice in background
// mentre viene aseguito altro codice, senza interrompere l'esecuzione di quest'ultimo
// es:

function repeat(callback, n){
    let id = setInterval(callback, 500);
    setTimeout(() => clearInterval(id), 500 * n);
}

repeat(() => console.log("Hi"), 3);

console.log("good")   // "good" viene stampato mentre viene eseguita la funzione di callback
