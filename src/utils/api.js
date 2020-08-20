const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:8080'

const getValue = (c_from, c_to) => {
    return axios.get(`/converter?c_from=${c_from}&c_to=${c_to}`)
        .then(({data: {value}}) => value)
        .catch(err => console.log(err))
}

const postLog = (c_from, c_to, value, fromValue, total) => {
    const log = {
        user_id: 'test',
        currency_from: c_from,
        currency_to: c_to,
        exchange_rate: value,
        amount_given: fromValue,
        amount_received: total
    }

    return axios.post('/audit', log)
        .then((res) => console.log(res.data.log[0]))
        .catch(err => console.log(err))
}

const getLogs = () => {
    return axios.get('/audit')
        .then(({data}) => data)
        .catch(err => console.log(err))
}

module.exports = {getValue, postLog, getLogs}