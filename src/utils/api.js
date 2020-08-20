const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:8080'

const getValue = (c_from, c_to) => {
    return axios.get(`/converter?c_from=${c_from}&c_to=${c_to}`)
        .then(({data: {value}}) => value)
}

module.exports = {getValue}