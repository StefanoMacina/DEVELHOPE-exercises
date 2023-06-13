/* 
MODULI 

I moduli sono altri file di node (js) che permettono di dividere il codice per renderlo meno complesso da leggere.
possono essere:

- built-in (costruiti da node)
- interni (creati da noi)
- esterni (scaricati dall'esterno)

export : module.exports = something || module.exports = { something1, something2}
import : const something = require('./path')


------------------------------------------------------------
MODULI BUILT-IN

moduli interni a node che è possibile richiamare.
*/

// OS MODULE
// informazioni su utente e sistema operativo in funzione

const os = require('os')

console.log(os.userInfo());
console.log(os.uptime());
console.log(os.hostname())
console.log(os.release())
console.log(os.totalmem() - os.freemem())