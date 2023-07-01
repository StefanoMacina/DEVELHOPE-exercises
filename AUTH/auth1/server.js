require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
app.use(express.json())


const posts = [
    {
        username : 'stefano',
        title : 'post 1'
    },
    {
        username : 'jim',
        title : 'post 2'
    }
]

app.get('/posts', (req, res) => {
    res.json({posts})
})

app.post('/login', (req, res) => {
    // AUTHENTICATE USER 
    const username = req.body.username
    const user = { name : username}

    //SERIALIZE THE USER WITH A SECRET KEY in .env file
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken : accessToken})
})

app.listen(3000)