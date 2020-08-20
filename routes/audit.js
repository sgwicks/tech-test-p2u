const auditRouter = require('express').Router()
const { getAllLogs, postNewLog } = require('../controllers/auditControllers')

auditRouter.route('/')
    .get(getAllLogs)
    .post(postNewLog)

module.exports = auditRouter