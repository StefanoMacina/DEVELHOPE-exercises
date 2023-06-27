// SOMMA ELEMENTI UNICI
/* Scrivi una funzione chiamata sumUniqueElements che accetti un array di numeri interi come argomento
 e restituisca la somma degli elementi unici presenti nell'array. 
Gli elementi duplicati devono essere conteggiati solo una volta nella somma. */



// (function sumUniqueElements(array){
//     const unique = [...new Set(array)]
//     const sum = unique.reduce((acc, curr) => acc + curr, 0)
//     console.log(sum);
// })( [1,2,2,3,4,4,7,8,9,9])

let array = [12,3,4,3,2,4];
const array2 = [...array]

console.log(array2)
