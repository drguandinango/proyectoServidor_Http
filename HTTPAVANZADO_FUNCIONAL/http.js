

/*const http=require('node:http')
const { findAvailablePort } = require('./puertoLibre')

const desiredPort=process.env.PORT ?? 12345


const servidor=http.createServer((req,res)=>{
    console.log('peticion recibida')
    res.end('hola datos')
})



// findAvailablePort(desiredPort).then(
        
//         port=>{

//         servidor.listen(desiredPort,()=>{
//             console.log(`escuchando en el puerto http://localhost:${desiredPort}`)
//         })

//         }
// )



*/

const http = require('node:http')
const { findAvailablePort } = require('./puertoLibre.js')

const desiredPort = process.env.PORT ?? 12345

const server = http.createServer((req, res) => {
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`)
  })
})



/*
 server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
  })*/