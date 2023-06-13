import { log } from 'node:console';
import * as fs from 'node:fs/promises';


//         BASIC USE OF TRY CATCH AND ASYNC AWAIT
//  in caso di reject di una promise, quelle precedenti verranno eseguite comunque se sono fulfilled
// async function outPutFiles(){
//     try {
//         const data1 = await fs.readFile('file-1.txt', {encoding : 'utf-8'})
//         log(data1)

//         const data2 = await fs.readFile('file-2.txt', {encoding : 'utf-8'})
//         log(data2)

//         const data3 = await fs.readFile('file-3.txt', {encoding : 'utf-8'})
//         log(data3)
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('completed')
//     }
// }

// outPutFiles()



//  -----------------------------------------------------
//                  USE OF PROMISE.ALL
// è possibile usare un try-catch al di fuori di una funzione asincrona se si è in un ECMAscript file (mjs), 
// Promise.all restituisce un array di promise su cui è possibile iterare come un qualsiasi array
// n.b. se una delle promise in promise.all restiuisce reject, nessuna delle altre viene eseguita e si passa al catch
try {
    const data = await Promise.all([
        fs.readFile('file-1.txt', {encoding : 'utf-8'}),
        fs.readFile('file-5.txt', {encoding : 'utf-8'}),
        fs.readFile('file-3.txt', {encoding : 'utf-8'}),
    ])
    data.forEach((el) => {
        log(el.toUpperCase())
    })
} catch (error) {
    log(error.name)
}