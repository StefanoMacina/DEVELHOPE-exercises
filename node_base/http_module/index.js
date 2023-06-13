/* 
MODULO HTTP INTRO
 - il modulo http serve per creare un web server 
 - importare http
 - creare risposta di default
 - mettere server in ascolto
 - gestire richiesta con routing ed errore

*/

const http = require("http");

const server = http.createServer((req, res) => {
  // gestire richiesta
  if (req.url === "/") {
    res.end("benvenuto sul sito");
  } else if (req.url === "/Stefano") {
    res.end("il profilo di stefano");
  } else {
    res.end(`<h1>Errore</h1>
        <p>torna alla <a href="/">home</a></p>`);
  }
});

server.listen(3000);
