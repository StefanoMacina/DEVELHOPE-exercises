const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/products', (req , res) => {
    res.send(('Product page'))
})

app.get('/cart' , (req, res) => {
    res.send('cart page')
})

app.get('*' , (req, res) => {
    res.send('<h1>Back to <a href="/">Home</a>')
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})