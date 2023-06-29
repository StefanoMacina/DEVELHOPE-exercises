const { create, getAll, getOneById, deleteById, updateById } = require('./controllers/planets');
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())



app.get('/api/planets', getAll)
app.get('/api/planets/:id', getOneById)
app.post('/api/planets', create)
app.put('/api/planets/:id' , updateById)
app.delete('/api/planets/:id', deleteById)



app.listen(port, () => console.log(`started at http://localhost:${port}`))