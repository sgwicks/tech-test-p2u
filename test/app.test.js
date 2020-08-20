const request = require('supertest')
const app = require('../server')
const connection = require('../db/connection')

beforeEach(() => connection.seed.run())

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
    describe('/audit', () => {
        test('POST: Can add new item to database', () => {
            return request(app)
                .post('/audit')
                .send({
                    user_id: 'test',
                    currency_from: 'GBP',
                    currency_to: 'USD',
                    exchange_rate: 0.75,
                    amount_given: 100,
                    amount_received: 75
                })
                .expect(201)
                .then(({body: {log}}) => {
                    expect(log[0]).toHaveProperty('log_id')
                    expect(log[0]).toHaveProperty('user_id', 'test')
                    expect(log[0]).toHaveProperty('currency_from', 'GBP')
                    expect(log[0]).toHaveProperty('currency_to', 'USD')
                    expect(log[0]).toHaveProperty('exchange_rate', '0.75')
                    expect(log[0]).toHaveProperty('amount_given', '100.00')
                    expect(log[0]).toHaveProperty('amount_received', '75.00')
                    expect(log[0]).toHaveProperty('date')
                })
        })
        test.only('GET: Returns all logs in database', () => {
            return request(app)
                .get('/audit')
                .expect(200)
                .then(({body: {logs}}) => {
                    expect(logs).toHaveLength(2)
                    expect(logs[0]).toHaveProperty('log_id')
                    expect(logs[0]).toHaveProperty('user_id', 'test')
                    expect(logs[0]).toHaveProperty('currency_from')
                    expect(logs[0]).toHaveProperty('currency_to')
                    expect(logs[0]).toHaveProperty('exchange_rate')
                    expect(logs[0]).toHaveProperty('amount_given')
                    expect(logs[0]).toHaveProperty('amount_received')
                    expect(logs[0]).toHaveProperty('date')
                })
        })
    })
})