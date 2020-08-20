const connection = require('../db/connection')

exports.addNewLog = (log) => {
    return connection('audit_logs')
        .insert(log)
        .returning('*')
}

exports.returnAllLogs = (dateFrom = '1970-01-01', dateTo = '2070-01-01') => {
    return connection('audit_logs')
        .select('*')
        .whereBetween('date', [dateFrom, dateTo])
}