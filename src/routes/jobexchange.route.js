const express = require('express')
const { getJobExchanges } = require('../controllers/jobexchange.controller')
const { addJobExchange, updateJobExchange, getJobExchange, deleteJobExchange } = require ('../controllers/jobexchange.controller')
const verifyToken = require('../middlewares/verifyToken')
const apiJobExchange = express.Router() 

apiJobExchange.post('/jobexchange', verifyToken,addJobExchange)
apiJobExchange.get('/jobexchanges', getJobExchanges)
apiJobExchange.put('/jobexchange/:jobexchangeId',updateJobExchange)
apiJobExchange.get('/jobexchange/:jobexchangeId', getJobExchange)
apiJobExchange.delete('/jobexchange/:jobexchangeId',deleteJobExchange)
module.exports = apiJobExchange