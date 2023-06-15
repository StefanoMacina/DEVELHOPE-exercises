const express = require('express')
const app = express()
const {persone} = require('./persone')

app.use(express.json())

app.get('/api/persone' , (req, res) => {
    res.status(200).json({data  : persone})
})

app.get('/api/persone/:id' , (req, res) => {
    const {id} = req.params
    const persona = persone.find((el) => el.id === id)
    res.json({data : persona})
})

// metodo post per inviare (tramite postman) dei dati:
app.post('/api/persone/', (req, res) => {
    console.log(req.body);
    // inserire la nuova persona in persone:
    const persona = req.body
    persone.push(persona)
    res.status(200).json({success : true , data : persone})
})



app.listen(3001, () => {
    console.log('server is running at http://localhost:3000')
})