import request from 'supertest'
import app from '../config/app'

describe('Book Routes', () => {
  describe('POST /books', () => {
    it('should return 200 on add book', async () => {
      await request(app).post('/api/books')
        .send({
          title: 'any_title',
          author: 'any_author'
        })
        .expect(200)
    })
  })

  describe('Get /books', () => {
    it('should return 200 when get books', async () => {
      await request(app).post('/api/books')
        .send({
          title: 'any_title',
          author: 'any_author'
        })

      await request(app).get('/api/books').expect(200)
    })
  })
})
