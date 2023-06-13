import {createServer} from 'node:http'

//              accettare requests, inviare responses
const server = createServer(( req ,  res) => {

//   stampare un messaggio quando il server riceve una request
        console.log('request received')
        res.statusCode = 200

//  tipo di dati
        res.setHeader('Content-Type','text/html')

// fine della response
        res.end("<html><body><h1>This page was served with node.js</h1></body></html>")
})

server.listen(3000 , () => {
    console.log('server running at http://localhost:3000')
}) 

