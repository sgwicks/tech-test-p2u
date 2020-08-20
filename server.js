const cors = require('cors');
const converterRouter = require('./routes/converter');
const auditRouter = require('./routes/audit');
const { json } = require('express');
const app = require('express')();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors())
app.use(json())

app.use('/converter', converterRouter)
app.use('/audit', auditRouter)

app.listen(8080, () => console.log('Listening on 8080'))

module.exports = app;