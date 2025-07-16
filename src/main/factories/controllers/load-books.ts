import { DbLoadBooks } from '../../../data/usecases/book/load-books/db-load-books'
import { BookMockRepository } from '../../../infra/db/mockdb/book/book-mock-repository'
import { LoadBooksController } from '../../../presentation/controllers/book/load-books/load-books-controller'

export const makeLoadBooksController = (): LoadBooksController => {
  const bookMockRepository = new BookMockRepository()
  const dbLoadBooks = new DbLoadBooks(bookMockRepository)
  return new LoadBooksController(dbLoadBooks)
}
