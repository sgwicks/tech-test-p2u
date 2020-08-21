const { addNewLog, returnAllLogs } = require("../models/auditModels")
const { request } = require("express")

exports.postNewLog = (req, res) => {
    const log = req.body
    return addNewLog(log).then((log) => {
        return res.status(201).send({log})
    })
    .catch(err => console.log(err))
}

exports.getAllLogs = (req, res) => {
    const {dateFrom, dateTo} = req.query
    return returnAllLogs(dateFrom, dateTo)
        .then((logs) => res.status(200).send({logs}))
        .catch(err => console.log(err))
}