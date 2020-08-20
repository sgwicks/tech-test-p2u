const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:8080'

const getGreeting = () => {
    return axios.get('/hey')
        .then((res) => res.data)
}

module.exports = getGreeting