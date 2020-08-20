const connection = require('../db/connection')

exports.addNewLog = (log) => {
    return connection('audit_logs')
        .insert(log)
        .returning('*')

}