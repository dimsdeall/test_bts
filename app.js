const express = require('express')
//menangani request body
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const userRoutes = require('./src/routes/user')
// const database = require('./src/config/mysql')

// console.log(database);

app.use(bodyParser.json()) // type JSON
//Handle CORS Origin 
// (*) untuk semua access dari path yang menuju
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use('/api', userRoutes)

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500
    const message = error.message
    const data = error.data

    res.status(status).json({ message: message, data: data })
})


app.listen(port)