

// /*const http=require('node:http')
// const { findAvailablePort } = require('./puertoLibre')

// const desiredPort=process.env.PORT ?? 12345


// const servidor=http.createServer((req,res)=>{
//     console.log('peticion recibida')
//     res.end('hola datos')
// })



// // findAvailablePort(desiredPort).then(

// //         port=>{

// //         servidor.listen(desiredPort,()=>{
// //             console.log(`escuchando en el puerto http://localhost:${desiredPort}`)
// //         })

// //         }
// // )



// */

// const http = require('node:http')
// const { findAvailablePort } = require('./puertoLibre.js')

// const desiredPort = process.env.PORT ?? 12345

// const server = http.createServer((req, res) => {
//   res.end('Hola mundo')
// })

// findAvailablePort(desiredPort).then(port => {
//   server.listen(port, () => {
//     console.log(`server listening on http://localhost:${port}`)
//   })
// })



// /*
//  server.listen(desiredPort, () => {
//     console.log(`server listening on port http://localhost:${desiredPort}`)
//   })*/
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////

const http = require('node:http')
const desiredPort = process.env.PORT ?? 12345

const { findAvailablePort } = require('./puertoLibre.js')

const funcionPorcesadrp = (req, res) => {


    res.setHeader('content-Type','text/html;charset=utf-8')

  //console.log('peticion reibida:', req.url)
  if(req.url  === '/'){

    res.statusCode=200



  res.end('hola mundito úlin monguito')

  }else if(req.url === '/contacto'){

    res.statusCode=200
    res.end('<h1>CONTACT</h1>')


  }else if(req.url === '/login'){

    res.end('<h3>ingresar datos personales..</h3>')
  }else{
    res.statusCode=400

    res.end('<h1>404</h1')


  }
  

   

}

const server = http.createServer(funcionPorcesadrp)


findAvailablePort(desiredPort)
  .then(
    port => {

      server.listen(port, () => {

        console.log(`escuchando en http://localhost:${port}`)
      })
    }
  )