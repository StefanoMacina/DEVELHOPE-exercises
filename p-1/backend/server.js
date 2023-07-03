const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());

const data = [
    {id : 1 , name : 'carolina', age : 20},
    {id : 2 , name : 'stfeano', age : 20},
    {id : 3 , name : 'alessandro', age : 20},
    {id : 4 , name : 'ernesto', age : 20}
]

app.get('/api/list', (req, res) => {
    res.status(200).json({success : true, data : data})
})


app.listen(3000, console.log(`http://localhost:3000`))