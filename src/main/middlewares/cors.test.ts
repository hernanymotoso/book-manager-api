import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  it('should enable CORS', async () => {
    app.post('/test_cors', (req, res) => { res.send(req.body) })
    await request(app).get('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
