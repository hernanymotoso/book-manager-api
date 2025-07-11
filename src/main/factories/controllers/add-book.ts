import { DbAddBook } from '../../../data/usecases/book/add-book/db-add-book'
import { BookMockRepository } from '../../../infra/db/mockdb/book/book-mock-repository'
import { AddBookController } from '../../../presentation/controllers/book/add-book/add-book-controller'

export const makeAddBookController = (): AddBookController => {
  const bookMockRepository = new BookMockRepository()
  const dbAddBook = new DbAddBook(bookMockRepository)
  return new AddBookController(dbAddBook)
}
