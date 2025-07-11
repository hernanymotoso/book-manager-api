import { AddBookRepository } from '../../../../data/protocols/db/book/add-book-repository'
import { LoadBooksRepository } from '../../../../data/protocols/db/book/load-books-repository'
import { BookModel } from '../../../../domain/models/book'
import { AddBookParams } from '../../../../domain/usecases/book/add-book'
import { mockDb } from '../helpers/mock-db-helper'

export class BookMockRepository implements AddBookRepository, LoadBooksRepository {
  async add (data: AddBookParams): Promise<BookModel> {
    const randomId = (): string => Math.random().toString(36).substring(2, 10)
    const book: BookModel = {
      ...data,
      createdAt: new Date().getTime(),
      id: randomId()
    }
    mockDb.books.push(book)
    return book
  }

  async loadAll (): Promise<BookModel[]> {
    return mockDb.books
  }
}
