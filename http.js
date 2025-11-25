const http=require('node:http')

const servidor=http.createServer((req,res)=>{

    console.log('peticion recibida')
    res.end('hola datos')
})


servidor.listen(0,()=>{
    console.log(`escuchando en el puerto http://localhost:${servidor.address().port}`)
})
