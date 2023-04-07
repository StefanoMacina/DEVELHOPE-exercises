const isLogged = true;

function getUserStatus(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random()
        if(isLogged){
            resolve(rand)
        } else {
            reject(new Error("User does not logged in!"))
        }

        }, 500)
    })
    
}


function getUserData(inputNumber){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(inputNumber > 0.5 && !isNaN(inputNumber) ) {
                resolve(`{name: "John", age: 24}`)
            } else {
                reject(new Error('user does not exist'))
            }
        }, 1500)
        
    })
}


function fromJson(json){
    try{
        return JSON.parse(json)
    } catch (err){
        if(err instanceof SyntaxError){
            console.log(`Something went wrong in json object : ${err.name}`)
        } else if(err instanceof ReferenceError){
            throw new Error(`Something went wrong in json object : ${err.message}`)
        }
        
    }
    
}

getUserStatus(isLogged)
        .then((val) => getUserData(val))
        .then((val) => fromJson(val))
        .then((val) => console.log(val))
        .catch((error) => console.log(`${error.name} : ${error.type} user`))

        .finally(() => console.log("Script completed"))





