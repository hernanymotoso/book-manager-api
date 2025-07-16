import request from 'supertest'
import app from '../config/app'

describe('Book Routes', () => {
  describe('POST /books', () => {
    const accessToken = 'valid_token'
    it('should return 200 on add book', async () => {
      await request(app).post('/api/books')
        .set('x-access-token', accessToken)
        .send({
          title: 'any_title',
          author: 'any_author'
        })
        .expect(200)
    })

    it('should return 403 on add book without accessToken', async () => {
      await request(app).post('/api/books')
        .send({
          title: 'any_title',
          author: 'any_author'
        })
        .expect(403)
    })
  })

  describe('Get /books', () => {
    it('should return 200 when get books', async () => {
      const accessToken = 'valid_token'
      await request(app).post('/api/books')
        .set('x-access-token', accessToken)
        .send({
          title: 'any_title',
          author: 'any_author'
        })

      await request(app).get('/api/books').set('x-access-token', accessToken).expect(200)
    })
  })
})
