const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())

app.get('/info', (req , res ) => {
    res.status(200).json({info : 'preset text'})
})

app.post('/' , (req , res) => {
    const { parcel } = req.body
    console.log(parcel);
    res.status(200).send( { status : 'received' })
})

app.listen(port , () => {
    console.log(`server is running at http://localhost:${port}`)
})