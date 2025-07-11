import { BookModel } from '../../models/book'

export type AddBookParams = Omit<BookModel, 'id' | 'createdAt'>

export interface AddBook {
  add: (data: AddBookParams) => Promise<BookModel>
}
