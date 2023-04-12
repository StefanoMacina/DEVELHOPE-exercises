function isLoggedIn(userId){
    return new Promise((resolve, reject) => {
        let rand = Math.random()                                        
        if(rand > 0.3){                                     
            resolve(userId)
        } else {
            reject(new Error("Not logged in"))
        }
    })
}

function getUserDetails(userId){                                        
    return new Promise((resolve, reject) => {                   
        if(userId < 5){                                                 
            resolve({"name": "Greg", "otherData" : "hello"})
        } else {
            reject(new Error("User does not exist"))
        }
    })
}


function getUsername({name}){
    return name
}

// --------------------------------------------------------------------------------------------------------  (1)
//CON IL PROMISE CHAINING:     
/* isLoggedIn(3)
    .then((val) => getUserDetails(val))
    .then((val) => getUsername(val))
    .then((val) => console.log(val))  
    .catch((error) => console.log(error.name)) */


//  --------------------------------------------------------------------------------------------------------    (2)
//CON UN FUNZIONE ASINCRONA    
async function printUserName(id){
    let userId = await isLoggedIn(id)
    let userDetails = await getUserDetails(userId)
    let userName = await getUsername(userDetails)
    return userName
}

printUserName(4)
.then((val) => console.log(val))
.catch((error) => console.log(error.name))