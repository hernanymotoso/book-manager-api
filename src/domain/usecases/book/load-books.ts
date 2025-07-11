import { BookModel } from '../../models/book'

export interface LoadBooks {
  load: () => Promise<BookModel[]>
}
