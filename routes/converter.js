const { getConvertorValue } = require('../controllers/converterControllers');

const converterRouter = require('express').Router();

converterRouter.route('/').get(getConvertorValue)

module.exports = converterRouter