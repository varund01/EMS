const express = require('express')
const bodyParser = require('body-parser')

const port = 6700

app = express()
app.use(bodyParser.json());

const user = require('./routes/user')
const articles = require('./routes/articles')
const profile = require('./routes/profile')


app.use('/api/articles',articles)
app.use('/api/profile',profile)
app.use('/api/user',user)

// parse application/json


app.listen(port,()=>console.log("Server Started on Port 6700..."))
