
 // --------------------------------------------------------
// SOMMA ELEMENTI UNICI
/* Scrivi una funzione chiamata sumUniqueElements che accetti un array di numeri interi come argomento
 e restituisca la somma degli elementi unici presenti nell'array. 
Gli elementi duplicati devono essere conteggiati solo una volta nella somma. */

const axios = require('axios')



                // (function sumUniqueElements(array){
                //     const unique = [...new Set(array)]
                //     const sum = unique.reduce((acc, curr) => acc + curr, 0)
                //     console.log(sum);
                // })( [1,2,2,3,4,4,7,8,9,9])


// -----------------------------------------------------------------
// --- Esercizio: Calcola la somma degli elementi in un array ------

                // const array = [1,2,3,4]

                // let somma = 0

                // function calc(arr){
                //     for(let i of arr){
                //         somma += i
                //     }
                //     console.log(somma)
                // }

                // calc(array)

//---------------------------------------------------------------------
// -------   Esercizio: Trova il numero maggiore in un array  ---------

                // const array = [1,2,32,4,2,54]

                // const max = Math.max(...array)
                // console.log(max)

//---------------------------------------------------------------------
//---------- Esercizio: Inverti una stringa ---------------------------

// let string = 'otto'

// const reversed = string.split("").reverse().join('')

// console.log(reversed);


//---------------------------------------------------------------------
//----------  ---------------------------


                // const array = [1,2,3,4,5,6]

                // console.log({array});

                //  array.splice(0,3)

                // console.log({el});
                // console.log({array});


                

//-------------------------------------------------------------------------------------------------------------
//------ Esercizio: Crea una classe persona e due classi teacher e student che ereditano da persona ----------


// class Persona{
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }

//     sayHi(){
//         console.log(`hi my name is ${this.name}`);
//     }
// }

// class Teacher extends Persona{
//     constructor(name, age, course){
//         super(name, age)
//         this.course = course
//     }

//     insegna(){
//         console.log(`hi, im teaching ${course} `)
//     }

//     sayHi(){
//         console.log(`hello!!`)
//     }
// }

// class Students extends Persona{
//     constructor(name, age, classs){
//         super(name, age)
//         this.classs = classs
//     }

//     study(){
//         console.log(`hi, im studying`)
//     }
// }


// const ernesto = new Students('ernesto', 14, 1945)

// const prof1 = new Teacher('patty', 45, "storia") 


// const persone = [ernesto, prof1]

// persone.forEach((p) => p.sayHi())