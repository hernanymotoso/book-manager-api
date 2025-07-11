import { BookModel, LoadBooks, LoadBooksRepository } from './db-load-books-protocols'

export class DbLoadBooks implements LoadBooks {
  constructor (private readonly loadBooksRepository: LoadBooksRepository) {}

  async load (): Promise<BookModel[]> {
    await this.loadBooksRepository.loadAll()
    return null
  }
}
