//------producer code---------------
// LA RELAZIONE SI BASA SU:
// getUsername -> getUserDetails -> isUserLoggedIn 

function isLoggedIn(userId){
    return new Promise((resolve, reject) => {
        let rand = Math.random()                                        //inserisco id manualmente
        if(rand > 0.3){                                      //===>     // se il num random è > 0.3 => restituisce lo user ID
            resolve(userId)
        } else {
            reject(new Error("Not logged in"))
        }
    })
}

function getUserDetails(userId){                                        // se lo user id è inferiore a 3 risolve la promise
    return new Promise((resolve, reject) => {                   //===>  // restituendo un oggetto (simulazione database)
        if(userId < 5){                                                 // altrimenti a quell'id non è collegato nessun utente
            resolve({"name": "Greg", "otherData" : "hello"})
        } else {
            reject(new Error("User does not exist"))
        }
    })
}


function getUsername({name}){
    return name
}

//---------------------consumer code-------------------
//                         CHAINING

//  1) CHIAMARE UNA FUNZIONE
//  isUserLoggedIn(userId)
isLoggedIn(3)
//      2) IN BASE AL SUO OUTPUT CHIAMO LA SECONDA FUNZIONE
//      .then((userId) => getUserDetails())   
    .then((val) => getUserDetails(val))
    //  3) IN BASE AL SUO OUTPUT CHIAMO LA TERZA FUNZIONE
    //    .then((details) => getUsername(details))
    .then((val) => getUsername(val))
    //  4)  ALLA FINE DELLA CATENA CHIAMO IL PARAMETRO "VAL"
    //  .then((val) => console.log(val))
    .then((val) => console.log(val))  // (!) val = name
    //  5)  INFINE GESTISCO GLI ERRORI IN QUALUNQUE ALTRA FUNZIONE
    //    .catch((err) => console.log(err))
    .catch((error) => console.log(error.name))


