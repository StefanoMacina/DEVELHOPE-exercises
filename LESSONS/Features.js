//------------------------------------------------------------
//DESTRUCTURING ARRAYS

// destructuring = assegnare valori di un oggetto/array a nuove variabili
// evitando di dover ripetere il codice
// utile quando si hanno array con pochi valori
// !!negli array è importante l'ORDINE, IL DESTRUCTURING AVVIENE PER INDICE!!

/* let arr = [1,2,3,4]; */
// anzichè scrivere:

// let i = arr[0];
// let j = arr[1];

// assegno ogni valore dell'array "arr" ad una variabile:

// imposta "i" = arr[0]
// j = arr[1], "k" = arr[2] ecc..


/* let [i, j, k, l] = arr */

/* console.log(i)  //i = 1 */


//-------------------------------------------------------------
//DESTRUCTURING OBJECTS
//


/* const bob = {
    first: "bob",
    last: "sanders",
    city: "chicago",
    siblings: {
        sister: "jane"
    },
}; */

// senza destructuring:
// il codice si ripete 

/* const firstName = bob.first;
const lastName = bob.last;
const city = bob.city;
const sister = bob.siblings.sister */

/* console.log(firstName, lastName, city, sister) */

// con destructuring
                        //accedo a siblings e assegno alias
/* const {first, last, city, siblings: {sister:favor}} = bob */

/* console.log(first, city, favor) */