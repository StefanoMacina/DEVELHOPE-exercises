const express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan');
require('express-async-errors')

dotenv.config()

const app = express()

app.use(express.json())
app.use(morgan('dev'))

let planets = [
    {
      id: 1,
      name: 'Earth',
    },
    {
      id: 2,
      name: 'Mars',
    },
  ];

app.get('/', (req, res) => {
    res.json(planets)
})

app.listen(3000 , () => {
    console.log('server is runnig at http://localhost:3000')
})