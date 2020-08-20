const cors = require('cors')
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

app.listen(8080, () => console.log('Listening on 8080'))

