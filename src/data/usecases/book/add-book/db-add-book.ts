import { BookModel } from '../../../../domain/models/book'
import { AddBook, AddBookParams } from '../../../../domain/usecases/book/add-book'
import { AddBookRepository } from '../../../protocols/db/book/add-book-repository'

export class DbAddBook implements AddBook {
  constructor (private readonly addBookRepository: AddBookRepository) {}

  async add (data: AddBookParams): Promise<BookModel> {
    return await this.addBookRepository.add(data)
  }
}
