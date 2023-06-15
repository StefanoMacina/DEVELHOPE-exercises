const express = require('express')
const app = express()
const {persone} = require('./persone')

app.use(express.json())

app.get('/api/persone' , (req, res) => {
    res.status(200).json({success : true , data : persone})
})

app.get('/api/persone/:id' , (req, res) => {
    const {id} = req.params
    const persona = persone.find((el) => el.id === id)
    res.status(200).json({success : true , data : persona})
})


app.post('/api/persone' , (req, res) => {
    const persona = req.body
    persone.push(persona)
    res.json({ success : true , data : persone})
})

app.put('/api/persone/:id' ,(req, res) => {
    const {id} = req.params

    // PERSONA = JSON CHE DEVE SOSTITUIRE L'ELEMENTO A INDICE N
    const persona = req.body

    // INDICARE CHE L'ELEMENTO A INDICE N (persone[n] deve essere sostituito da req.body)
    persone[Number(id - 1)] = persona
    res.status(200).json({success  : true ,  data : persone})
})




app.listen(3003 , () => {
    console.log('server is running at http://localhost:3000');
})