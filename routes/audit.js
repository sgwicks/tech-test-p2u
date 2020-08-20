const auditRouter = require('express').Router()
const { postNewLog } = require('../controllers/auditControllers')

auditRouter.route('/')
    .post(postNewLog)

module.exports = auditRouter