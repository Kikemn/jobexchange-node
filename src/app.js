const express = require('express')
const authApi = require('./routes/auth.route')
const apiJobExchange = require('./routes/jobexchange.route') 
const bodyParser = require('body-parser')
const morgan = require('mongoose-morgan')
const app = express()
const cors = require ('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan({
    connectionString:`mongodb://localhost:27017/store`
}))


app.use('/v2',authApi)
app.use('/v2',apiJobExchange) 
module.exports = app