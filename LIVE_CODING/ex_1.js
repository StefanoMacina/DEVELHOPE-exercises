//creare una funzione che accetta due parametri
//i due parametri saranno num e string, 
//deve creare un'array di x stringhe, in base al numero passato come parametro

function multiply(num, string) {
    let list = [];
    if(num < 1 || typeof(string)  != "string" ){
        return "inserire valore valido"
    }   
    for(let i = 0 ; i < num ; i++){
        list.push(string)
    }
    return list
}


console.log(multiply(4,5))


