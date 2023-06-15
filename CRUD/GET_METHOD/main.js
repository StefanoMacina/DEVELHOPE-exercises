// ESEMPIO METODO GET

const express = require('express')
const app = express()

const {persone} = require('./persone')

app.get('/api/persone' , (req, res) => {
    res.status(200).json({data : persone})
})

app.get('/api/persone/:id' , (req, res) => {
    const {id} = req.params
    const persona = persone.find((el) => el.id === id)
    res.status(200).json({data : persona})
    
})

app.listen(3000 , () => {
    console.log('server is running at http://localhost:3000');
})