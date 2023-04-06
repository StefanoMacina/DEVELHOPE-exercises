//PROMISE EXPLANATION

// ESEMPIO PRATICO:
// creare una promise che si risolve se il numero generato casualmente è maggiore di 0.5, altrimenti restituisce un errore:

/* let ourPromise = new Promise((resolve, reject) => {
  let rand = Math.random()
    if(rand > 0.5){
      resolve(rand)
    } else {
      reject(new Error("Whoops"))
    }
}) */

/* ourPromise
  .then((val) => console.log(val))
  .catch(error => console.log(error.name)) */


// PROMISE CHAINING: STESSO CODICE MA RESTITUIENDO L'OUTPUT PRECEDENTE AL THEN SUCCESSIVO:


let ourPromise = new Promise((resolve, reject) => {
  let rand = Math.random()
    if(rand > 0.5){
      resolve(rand)
    } else {
      reject(new Error("error"))
    }
})  


//Quando un gestore (handler) ritorna un valore, questo diventa il risultato della promise con il quale sarà chiamato il prossimo .then.
ourPromise                                                        
  .then((val) => val * 10)       
  .then((val) => `${val} con prima e seconda iterazione`)        // I   valori di output passano ai successivi then fino all'ultimo che stampa il risultato
  .then((val) => console.log(val))    //FINE                     // (!) ma solo se la promise viene risolta (rand > 0.5)
  .catch((err) => console.log(err.name))


