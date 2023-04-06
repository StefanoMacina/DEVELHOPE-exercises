const number = 1;

let checkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(number > 10){
            resolve(`il numero ${number} è maggiore di 10`)
        } else {
            reject(`il numero ${number} è  minore di 10`)
        }
    },2000)
})

    
checkPromise
    .then((val) => console.log(val))
    .catch((val) => console.log(val))
  
 