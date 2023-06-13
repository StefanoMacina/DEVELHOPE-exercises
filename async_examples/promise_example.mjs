import * as fs from "node:fs/promises";

//              PROMISE SINTAX EXAMPLE
// let promise = new Promise((resolve, reject) => {
//     let b = 1 + 2
//     if (b == 2) {
//         resolve('success')
//     } else {
//         reject('failed')
//     }
// })

// promise
// .then((data1) => console.log(data1))
// .catch((err) => console.log(err))

//-----------------------------------------------------------------

//                 PROMISE CHAIN EXAMPLE
const a = 2
const b = 2
const c = 4
const d = 2

const example = (arg) => {
    return new Promise((resolve, reject) => {
        
        arg === 2 ? resolve('resolved') : reject('rejected')
    })
}

example(a)
    .then((res) => {
        console.log(res)
        return example(b)
    })
    .then((res2) => {
        console.log(res2)
        return example(c)
    })
    .then((res3) => {
        console.log(res3)
        return example(d)
    })
    .then((res4) => {
        console.log(res4);
    })
    .catch((err) => console.log(err))
//------------------------------------------------------------
//              PROMISE EXAMPLES

// fs.readFile('file-1.txt', {encoding:'utf-8'})
//     .then(function(data1){
//         console.log(data1)
//     })
//     .then(function(){
//         return fs.readFile('file-2.txt', {encoding : 'utf-8'})
//     })
//     .then(function(data2){
//         console.log(data2)
//     })
//     .then(function(){
//         return fs.readFile('file-23.txt', {encoding : 'utf-8'})
//     })
//     .then(function(data3){
//         console.log(data3)
//     })
//     .catch(function(err){
//         console.log(err.name);
//     })



// --------------------------------------------------------------
    //            ARROW FUNCTIONS REFACTORING

// fs.readFile('file-1.txt', {encoding : 'utf-8'})
//     .then((data1) => console.log(data1))
//     .then(() => fs.readFile('file-22.txt', {encoding : 'utf-8'}))
//     .then((data2) => console.log(data2))
//     .then(() => fs.readFile('file-3.txt', {encoding : 'utf-8'}))
//     .then((data3) => console.log(data3))
//     .catch((err) => console.log(err.name))
//     .finally(() => console.log('completed'))
