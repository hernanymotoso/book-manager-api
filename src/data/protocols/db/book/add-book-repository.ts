import { BookModel } from '../../../../domain/models/book'
import { AddBookParams } from '../../../../domain/usecases/book/add-book'

export interface AddBookRepository {
  add: (book: AddBookParams) => Promise<BookModel>
}
