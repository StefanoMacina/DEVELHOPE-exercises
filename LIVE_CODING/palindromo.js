function isPalindrom(pippo) {
    let originString = pippo;
    let reversed = originString.split("").reverse().join("")
    
    if(originString === reversed) {
        console.log("è un palindromo")
    } else { 
        console.log ("non è un palindromo")
    }
     
}

func("otto")