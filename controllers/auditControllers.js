const { addNewLog } = require("../models/auditModels")

exports.postNewLog = (req, res) => {
    const log = req.body
    return addNewLog(log).then((log) => {
        return res.status(201).send({log})
    })
}