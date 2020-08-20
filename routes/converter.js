const converterRouter = require('express').Router();

converterRouter.route('/').get((req, res) => res.sendStatus(200))

module.exports = converterRouter