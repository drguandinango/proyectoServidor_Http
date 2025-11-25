const http=require('node:http')


const {findAvailablePort}=require('./puertoDisponible')
const desirePort=process.env.PORT ?? 12345

const servidor=http.createServer((req,res)=>{


    console.log('petición recibid')
    res.end('hola mundo')

})

findAvailablePort(desirePort)
    .then(
        port=>{

            servidor.listen(port,()=>{

                console.log(`escuchando en el puerto http://localhost:${port}`)
            })
        }
    )
