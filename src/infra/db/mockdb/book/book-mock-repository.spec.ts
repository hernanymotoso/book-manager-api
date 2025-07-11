import { BookModel } from '../../../../domain/models/book'
import { mockDb } from '../helpers/mock-db-helper'
import { BookMockRepository } from './book-mock-repository'

const makeBookModels = (): BookModel[] => {
  return [{
    id: 'any_id',
    title: 'any_title',
    author: 'any_author',
    createdAt: new Date().getTime()
  },
  {
    id: 'other_id',
    title: 'other_title',
    author: 'other_author',
    createdAt: new Date().getTime()
  }]
}

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

  describe('loadAll()', () => {
    beforeEach(() => {
      mockDb.books = []
    })

    beforeEach(() => {
      mockDb.books = []
    })

    it('should load all books on success and return books', async () => {
      mockDb.books = makeBookModels()
      const sut = makeSut()
      const books = await sut.loadAll()
      expect(books).toEqual(mockDb.books)
      expect(mockDb.books.length).toBe(2)
      expect(mockDb.books[0].id).toBeTruthy()
      expect(mockDb.books[0].title).toBe('any_title')
      expect(mockDb.books[0].author).toBe('any_author')
    })
  })
})
