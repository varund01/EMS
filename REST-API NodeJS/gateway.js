const express = require('express')
const bodyParser = require('body-parser')

const port = 6700

app = express()
app.use(bodyParser.json());


const articles = require('./routes/articles')
const profile = require('./routes/profile')
const user = require('./routes/user')


app.use('/api/articles',articles)
app.use('/api/profile',profile)
//app.use('/api/user',user)

// parse application/json


app.listen(port,()=>console.log("Server Started on Port 6700..."))
