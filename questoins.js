//  -------------------------------------------
//  ------ COS'è JAVASCRIPT--------------------

/*  javascript è un linguaggio interpretato ad alto livello utilizzato per lo sviluppo di web app

  - INTERPRETATO
  - NON TIPIZZATO
  - ORIENTATO AGLI OGGETTI
  - GESTIONE DEL DOM
  - PERMETTE ASINCRONIA
  - AMPIO SUPPORTO DEI BROWSER
*/

//--------------------------------------------
// -------NULL VS UNDEFINED ------------------

/*  null       =  valore impostato per una variabile
    undefined  =  variabile il cui valore non è definito
*/

// -------------------------------------------
//-------- LET, CONST, VAR -------------------

/*  VAR = RIDICHIARABILE, RIASSEGNABILE, SCOPE DI BLOCCO, HOSTING VALIDO
    LET = !RIDICHIARABILE, RIASSEGNABILE, SCOPE DI BLOCCO, HOISTING ma con referenceError
    CONST = !RIDICHIARABIE, !RIASSEGNABILE,  SCOPE DI BLOCCO
*/

// -------------------------------------------
// ------------ CLOSURES ---------------------
/*  
   la closure si riferisce alla combinazione di una funzione e l'ambiente in cui è stata dichiarata. 
    Una closure consente a una funzione di accedere alle variabili esterne alla sua definizione, 
    anche quando viene eseguita al di fuori del contesto in cui è stata creata.
    utile per creare dati privati leggibili comunque dalla funzione che viene richiamata
*/

              // function outer(name){
              //    const something = name.toUpperCase()
                 
              //   function inner(){
              //     console.log(` Hello ${something}`)
              //   }
              //   inner()
              // }

              // outer('luca')

// --------------------------------------------
// ------------ CALLBACK ----------------------

/*   Una callback è una funzione passata ad un'altra funzione come argomento,
     questo permette ad una funzione di richiamare un altra funzione che viene eseguita al termine della prima
     sono utili durante la scrittura di codice asincrono
*/

                // function sum (a,b){
                //   return a + b
                // }

                // function divide (a,b){
                //   return a/b
                // }

                // function calculate(x,y,operation){
                //   return operation(x,y)
                // }

                // console.log(calculate(2,4,divide))

// --------------------------------------------
// -------------- __PROTO__ -------------------
/* 
  il concetto di "prototipo" è strettamente legato all'ereditarietà degli oggetti.
  Ogni oggetto in JavaScript è un'stanza del suo prototipo,il __proto__ è un oggetto da cui eredita proprietà e metodi. 
  Quando si accede a una proprietà o un metodo su un oggetto, javascript lo cerca all'interno della variabile
   e all'interno del prototype
  */

  // __proto__ : Object + tutti i metodi applicabili o aggiunti 
  const dude = {} 

  //__proto__ : Array + tutti i metodi applicabili o aggiunti
  const array = []


console.log(array);


//----------------------------------------------------------------
//--------------- DIFFERENZA TRA SYNCHRONOUS E ASYNCHRONOUS ------
/* 
 SINCRONA = javascript esegue le operazioni una dopo l'altra, il flusso del codice viene bloccato finchè l'operazione precednete
            non viene completata
 ASINCRONA = le istruzioni vengono eseguite in modo sequenziale, ma possono essere programmate per essere eseguite in un secondo momento
              mantenendo il flusso principale libero
  */

//        ASINCRONO : 
              //  console.log('prima')

              //  setTimeout(() => {
              //     console.log('seconda');
              //  }, 1500);

              //  console.log('terza');

//        SINCRONO : 
              // function delay(ms) {
              //   return new Promise(resolve => setTimeout(resolve, ms));
              // }

              // async function synchronized() {
              //   const prima = await Promise.resolve('prima');
              //   console.log(prima);

              //   await delay(1500);
              //   const seconda = 'seconda';
              //   console.log(seconda);

              //   const terza = await Promise.resolve('terza');
              //   console.log(terza);
              // }

              // synchronized();

//  -----------------------------------------------
//  ----------------- CALLBACKS  ------------------
/* 
  le callback sono funzioni passate come argomenti ad un'altra funzione,
  sono utili per eseguire un azione al verificarsi di una condizione
  come per esempio un risultato in un codice asincrono */

              // function operazioneAsincrona(callback){

              //   setTimeout(() => {
              //       const result = 'risultato'
              //       callback(result)
              //   }, 2000);
              // }

              // function miaCallback(data){
              //   console.log(`callback eseguita con il risultato : ${data}`)
              // }

              // operazioneAsincrona(miaCallback)


  // -------------------------------------------------------------------
  // ---------------- COPIA PER RIFERIMENTO VS VALORE -----------------

  // VALORE : le variabili puntano a due diverse celle di memoria,
  //          i dati primitivi sono passati per valore

              // let var1 = 10
              // let var2 = var1
              // var2 = 20

              // console.log(var2);
              // console.log(var1)

// RIFERIMENTO : le variabili puntano alla stessa cella di memoria,
//               le modifiche sulla prima var si ripercuotono sull'altra
//               gli oggetti e array sono passati per riferimento


              // let person1 = {
              //   name : 'ilary',
              //   age : 25
              // }

              // let person2 = person1
              // person2.name = 'ilary'

              // console.log(person2, person1)

/*  utilizzando lo spread operator è possibile creare una copia per valore di un oggetto o array,
anche alcuni metodi degli array :*/

//          slice, concat, array.from, array.of, map, filter

// const array1 = [1,2,3,4,5,6]

// const array2 = array1

// const newArray = array2.slice()

// newArray.push(2)

// console.log({array1},{ array2}, {newArray});

// const array1 = [1,2,3,4,5]

// function handle(array){
//   const arr2 = array.map(el => {
//     return(`${el} o`)
    
//   });
//   console.log({arr2})
// }

// handle(array1)

// console.log({array1});


// ---------------------------------------------------------------------
// ------------ MODIFICARE OGGETTO DICHIARATO CON CONST -----------------

/* posso modificare i valori di un oggetto dichiarato con const, ma non posso
modificare l'intero oggetto */

// LEGIT : 
              // const person1 = {
              //   name : 'stefano',
              //   age : 25
              // }

              // person1.name = 'ilary'
              // console.log(person1);

// NOT LEGIT :  
              // const person1 = {
              //   name : 'stefano',
              //   age : 25
              // }

              // person1 = {
              //   name : 'ilary',
              //   age : 45
              // }

              // console.log(person1);



