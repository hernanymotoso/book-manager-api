import { AddBook, AddBookParams, AddBookRepository, BookModel } from './db-add-book-protocols'

export class DbAddBook implements AddBook {
  constructor (private readonly addBookRepository: AddBookRepository) {}

  async add (data: AddBookParams): Promise<BookModel> {
    return await this.addBookRepository.add(data)
  }
}
