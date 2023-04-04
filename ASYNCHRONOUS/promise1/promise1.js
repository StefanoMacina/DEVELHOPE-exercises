//---------------------------------------------------------------
//crea una funzione che ritorni un oggetto promise, la promise 
// deve risolversi dopo 2 secondi e deve stampare in console hello world



/* function job() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello world");
        }, 2000)
    })
}

job()
    .then((message) => console.log(message))
    .catch((err) => console.error(err))
 */



//-------------------------------------------------------------------

/* function job(data){
    return new Promise((resolve, reject)=>{
        if(isNaN(data)){
            reject("Error")
        } else if (data % 2 > 0){
            setTimeout(() => {
                resolve("ODD")
            }, 1000)
        } else {
            setTimeout(() => {
                reject("EVEN")
            }, 2000)
        }
    })
}
job(4)
    .then((message) => console.log(message))
    .catch((message) => console.log(message))
 */

// -------------------------------------------------------------------
// crea una funzione che ritorni una promise come prima suando async


function job(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const obj = {
                name : "Stefano",
                age : 23
            }

            reject("Promise rejected")

        }, 2500)
    })
}



async function fetchData (){
    try {
        const data = await job();
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}


fetchData()