const { log } = require('console')
const http = require('http')

const server = http.createServer((req , res) => {
    log('request received')
    res.statusCode = 200
    res.setHeader('Content-Type' , 'text/html')
    res.end('<h1> Server launched </h1>')
})

server.listen(3000 , () => {
    log('server in ascolto')
})