const request = require('supertest')
const app = require('../app')

describe("GET /v2/jobexchanges",()=>{
    it('respond with json a list  of jobexchanges', done =>{
        request(app)
        .get('/v2/jobexchanges')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200,done)
    })
    
})

describe("GET /v2/jobexchange/:id",()=>{
    const id = '601b7146a0580648e9d2eaed'
    const notExist = '5ffa0c695c64373e93126889'
    it('responde with json container a single jobexchange', done =>{
        request(app)
            .get(`/v2/jobexchange/${id}`)
            .set('Accept','application/json')
            .expect('Content-Type', /json/)
            .expect(200,done)
    })
    it('respond with json "item not found" when the jobexchange doesnt exists', done =>{
        request(app)
            .get(`/v2/jobexchange/${notExist}`)
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(404)
            .expect('{"message":"item not found"}')
            .end(err =>{
                if(err) done(err)
                done()
            })
    })
})

describe("POST /v2/jobexchange", () =>{
    it('respond with json 201 created', done =>{
        const data= {
            name: 'jobexchange test',
            size :15,
            unitaryPrice: 1000,
            description: 'testing post with mocha'
        }
        request(app)
            .post('/v2/jobexchange')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(201)
            .end(err => {
                if(err) done(err)
                done()
            })
    })
})


