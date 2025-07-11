import { BookModel } from '../../../../domain/models/book'

export interface LoadBooksRepository {
  loadAll: () => Promise<BookModel[]>
}
