
let testo = " "


function mostra(val){   //callback
    testo  = val
}

function somma (num1, num2, cb){
    let ris = num1 + num2;

    cb(ris)
}

somma(4,9, mostra)



 document.querySelector("#demo").innerHTML = testo