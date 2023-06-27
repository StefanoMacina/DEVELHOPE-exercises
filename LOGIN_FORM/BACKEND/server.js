const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send("hello")
})

app.post('/register' , (req,res) =>  {
    const {user,password} = req.body
    res.status(200).json({user , password})
})


app.listen(`${port}`, console.log(`http://localhost:${port}`));
