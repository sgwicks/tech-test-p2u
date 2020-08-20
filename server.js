const cors = require('cors');
const converterRouter = require('./routes/converter');
const app = require('express')();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors())

app.get('/hey', (req, res) => {
    console.log('React made a request')
    return res.send('ho!')
})

app.use('/converter', converterRouter)

app.listen(8080, () => console.log('Listening on 8080'))

module.exports = app;