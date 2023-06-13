/* 
MODULO FILESYNC:


 */

// ----------------------------------------  LEGGERE FILE in sincrono  -----------------------------------------------------------------
const { readFileSync, writeFileSync, write, readFile, read, writeFile} = require('fs')

// const prova = readFileSync('./text-1.txt', 'utf-8')
// console.log(prova);

// ----------------------- lavorare file -----------------------

//  - sostituire il testo del file
// writeFileSync('./text-1.txt' , 'bella')

//  - aggiungere del testo nel file 
// writeFileSync('./text-1.txt' , 'sono il file 1 ' , {flag : 'a'})

// ----------------------------------------- LEGGERE FILE IN ASINCRONO ---------------------------------------------------------------

// si aggiunge una callback che fa qualcosa non appena termina la lettura del file

// readFile('./text-1.txt' , 'utf-8' , (error , result) => {
//     if(error) {
//         console.log(error)
//         return
//     } else {
//         console.log(result)
//     }
// })

// - leggere due file e poi fare il console log di ogni singolo file usando le callback 

    readFile('./text-1.txt' , 'utf-8' , (error , result) => {
        error ? console.log(error.name) : console.log(result);

        readFile('./text-2.txt', 'utf-8' , (error, result) => {
            error ? console.log(error) : console.log(result)

            writeFile('./text-2.txt' , 'we' , (error, result) => {
                error ? console.log(error.name) : console.log(result);

                setTimeout(() => {
                    
                    readFile('./text-2.txt' , 'utf-8' , (error, result) => {
                        error ? console.log(error) : console.log(result);;
                    })
                }, 1500);
            })
        })
    })

    
setTimeout(() => {
    console.log('passo al prossimo compito');
}, 1000);
