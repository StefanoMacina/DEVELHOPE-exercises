/* 
---------- AGGIUNGERE FILE STATICI -----------

- creare cartella public/static
- app.use cartella
- creare pagina html per home, about e contatti


*/

// import express e impostare express su app per utilizzare gli use
const express = require('express')
const app = express()


//  indicare quale cartella usare per caricare i file
app.use(express.static('public'))

app.get('/' , (req, res) => {
    res.sendFile('home.html', {root : __dirname + "/public"})
})