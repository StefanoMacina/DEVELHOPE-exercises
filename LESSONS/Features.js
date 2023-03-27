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

//   DESTRUCTURING OBJECTS
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

// CON DESTRUCTURING--------------
                        //accedo a siblings e assegno alias
/* const {first, last, city, siblings: {sister:favor}} = bob */

/* console.log(first, city, favor) */



//---------------------------------------------------------------------------------
//
//  SPREAD OPERATOR
// 
//  Permette di creare un nuovo array/oggetto da un altro in una singola riga di codice

let arr = [1,2,3,4]

let obj = {
    "key1" : 1,
    "key2" : 2,
    "nested" : {
        "mult" : 4,
        "str" : 5
    }
}

// si vuole creare un nuovo array utilizzando quello presente, ma con nuovi elementi all'interno,
// utilizzando .push si va a modificare anche il vecchio array:


 let newArr = arr;

newArr.push(3) 

/* console.log(newArr)
console.log(arr) */

// Con lo spread operator NON si modifica il vecchio array:

let newArr1 = [...arr, 3];    // spread operator = '...' , il push viene fatto aggiungendo elementi dopo la virgola

/* console.log(arr)
console.log(newArr1) */


//-----------------------------------------------------------------------------------------


// REST OPERATOR

// Permette di assegnare altri valori ed una variabile durante il destructuring evitando che vengano ignorati:


let arr1 = [1,2,3,4,  6,7,8,9]

let [a, b, c, d, ...rest] = arr1

/* console.log(rest[0]);
console.log(rest[1])   */




//------------------------------------------------------------------------------------------

//JSON METHODS


//Permette di convertire un oggetto complesso in una singola stringa

//JSON.stringify() =   OBJECT -> JSON
//JSON.parse() =       JSON   -> OBJECT

//senza JSON:
// si utilizza toString() per convertire in stringa, questa modalità non è dinamica e può creare errori

/* let user = {
    name: "Jhon",
    age : "30",

    toString(){
        return `{name: "${this.name}", age: ${this.age}}`;
    }
}

console.log(user)
 */


// con JSON:   OBJECT -> JSON:

/* let user = {
    name : "jhon",
    age : 30
}   

let json = JSON.stringify(user)

console.log(typeof(json))
console.log(json)
 */







