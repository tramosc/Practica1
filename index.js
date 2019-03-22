var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hola mundo! en Express')
})

app.post('/', function (req, res){
    res.send('Llamada POST misma url')
})

app.put('/user', function (req, res){
    res.send('Recibimos un PUT en /user')
})

app.detele('/user', function (req, res){
    res.send('Recibimos un DELETE en /user')
})

app.use(function (req, res, next){
    res.status(404).send("esto no existe")
})

app.use(function (err, req, res, next){
   console.error(err.stack)
   res.status(500).send('Algo salio mal')
})

app.listen(3000, function (){
    console.log('Aplcacionde ejemplo escuchando en el puerto 3000!')
});