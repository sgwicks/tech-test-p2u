const { returnConverterValue } = require("../models/converterModels")

exports.getConvertorValue = (req, res) => {
    const {c_from, c_to} = req.query
    return returnConverterValue(c_from, c_to)
        .then((value) => res.status(200).send({value: Number(value[c_to])}))
}