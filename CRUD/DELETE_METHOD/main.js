const express = require('express')
const app = express()
const {persone} = require('./persone')
const port = 3002

app.use(express.json())

app.get('/api/persone' , (req , res) => {
    res.status(200).json(persone)
})

app.post('/api/persone' , (req , res) => {
    const person = req.body
    persone.push(person)
    res.status(201).json({success : true , data : persone})
})

app.put('/api/persone/:id' , (req, res) => {

    const {id} = req.params
    const {name} = req.body
    const persons = persone.map(p => p.id === Number(id) ? ({...p, name}) : p)
    res.status(200).json({ success : true, data : persons})
})


app.listen(port, (req, res) => {
    console.log(`server listening at http://localhost:${port}`)
})


