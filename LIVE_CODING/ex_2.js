//crea una funzione che accetta un parametro
//questo array deve essere invertito senza usare reverse


function ex(array) {
    inverted=[];
    array.forEach(el => {
        inverted.unshift(el)
        
    });   
    return inverted
}

console.log(ex([1,2,3,4,5,6]))