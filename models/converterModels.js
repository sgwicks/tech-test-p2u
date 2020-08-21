const connection = require('../db/connection')

exports.returnConverterValue = (c_from, c_to) => {
    return connection('currencies')
        .select(c_to)
        .where('currency', c_from)
        .then(([value]) => value)
        .catch(err => console.log(err))
}