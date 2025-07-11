import { mockDb } from '../helpers/mock-db-helper'
import { BookMockRepository } from './book-mock-repository'

const makeSut = (): BookMockRepository => {
  return new BookMockRepository()
}

describe('Book Mock Repository ', () => {
  describe('add()', () => {
    beforeAll(() => {
      mockDb.books = []
    })

    afterAll(() => {
      mockDb.books = []
    })

    it('should add a book on success', async () => {
      const sut = makeSut()

      await sut.add({
        title: 'any_title',
        author: 'any_author'
      })

      expect(mockDb.books.length).toBe(1)
      expect(mockDb.books[0].id).toBeTruthy()
      expect(mockDb.books[0].title).toBe('any_title')
      expect(mockDb.books[0].author).toBe('any_author')
    })

    it('should add a book and return it', async () => {
      const sut = makeSut()

      const book = await sut.add({
        title: 'any_title',
        author: 'any_author'
      })

      expect(book.id).toBeTruthy()
    })
  })
})
