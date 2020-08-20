const request = require('supertest')
const app = require('../server')

describe('app', () => {
    describe('/converter', () => {
        test('GET: Returns a 200 status', () => {
            return request(app)
                .get('/converter')
                .expect(200)
        })
    })
})