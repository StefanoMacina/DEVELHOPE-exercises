//PROMISE EXPLANATION

// LA RELAZIONE SI BASA SU:
// getUsername -> getUserDetails -> isUserLoggedIn 


//  1) CHIAMARE UNA FUNZIONE

//  isUserLoggedIn(userId)

//  2) IN BASE AL SUO OUTPUT CHIAMO LA SECONDA FUNZIONE   

//    .then((userId) => getUserDetails())

//  3) IN BASE AL SUO OUTPUT CHIAMO LA TERZA FUNZIONE

//    .then((details) => getUsername(details))

//  4)  ALLA FINE DELLA CATENA CHIAMO IL PARAMETRO "NAME"

//  .then((name) => console.log(name))

//  5)  INFINE GESTISCO GLI ERRORI IN QUALUNQUE ALTRA FUNZIONE

//    .catch((err) => console.log(err))

// ESEMPIO PRATICO:
// creare una promise che si risolve se il numero generato casualmente è maggiore di 0.5, altrimenti restituisce un errore:

/* let ourPromise = new Promise((resolve, reject) => {
  let rand = Math.random()
    if(rand > 0.5){
      resolve(rand)
    } else {
      reject(rand)
    }
}) */

/* ourPromise
  .then((val) => console.log(val))
  .catch((err) => console.log(err)) */


// PROMISE CHAINING: STESSO CODICE MA RESTITUIENDO L'OUTPUT PRECEDENTE AL THEN SUCCESSIVO:


let ourPromise = new Promise((resolve, reject) => {
  let rand = Math.random()
    if(rand > 0.5){
      resolve(rand)
    } else {
      reject(new Error("error"))
    }
})  

ourPromise
  .then((val) => val * 10)       
  .then((val) => `${val} con prima e seconda iterazione`)        // I   valori di output passano ai successivi then fino all'ultimo che stampa il risultato
  .then((val) => console.log(val))                            // (!) ma solo se la promise viene risolta (rand > 0.5)
  .catch((err) => console.log(err.name))

