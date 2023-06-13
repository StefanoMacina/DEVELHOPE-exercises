//   USARE JSON PER PASSARE DATI

const express = require('express')
const app = express()

/* ----------------- RENDERING OGGETTO JSON IN PAGINA --------------------------- */
// app.get('/' , (req, res) => {
//     res.json([{name : 'stefano' , cognome : 'macina'} , {nome : 'anna' , cognome : 'rossi'}])
// })

/*  ---------------- RENDERING OGGETTO JSON DA FILE ESTERNO ---------------------- */
// const {persone} = require('./persone')

// app.get('/' , (req , res) => {
//     res.json(persone)
// })


/* ----------------- RENDERING ELEMENTI DI OGGETTO JSON USANDO PARAMS -------------- */

const {persone} = require('./persone')

app.get('/' , (req , res) => {
    res.send('<h1> homepage, vai a <a href="/persone">persone</a></h1>')
})

app.get('/persone' , (req ,res) => {
    res.json(persone)
})

/*  usare un id dinamico per trovare l'elemento con id corrispondente */
app.get('/persone/:id' , (req , res) => {
    const persona = persone.find((el) => el.id === Number(req.params.id))
    
    /* gestire il caso in cui non ci sia l'elemento cercato */
    if(!persona){
        return res.status(404).send('Prodotto non trovato, torna alla <a href="/">home</a>')
    }
    res.json(persona)
})

app.listen(3000 , () => {
    console.log('server is running at http://localhost:3000');
    
})
