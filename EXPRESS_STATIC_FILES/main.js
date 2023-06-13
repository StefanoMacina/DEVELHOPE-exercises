const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req,res)=> {
    res.sendFile('homepage.html' , {root : __dirname + "/public"})
})

app.get('/products', (req,res)=> {
    res.sendFile('products.html' , {root : __dirname + "/public"})
})

app.all('*' ,(req, res) =>{
    res.sendFile('404.html' , {root : __dirname + "/public"})
})

app.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
})