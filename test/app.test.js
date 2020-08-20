const request = require('supertest')
const app = require('../server')

describe('app', () => {
    describe('/converter', () => {
        test('GET: Accepts queries for c_from and c_to', () => {
            return request(app)
                .get('/converter?c_from=GBP&c_to=USD')
                .then(({body}) => {                
                    expect(body).toEqual({value: 0.75})
                })
        })
    })
})