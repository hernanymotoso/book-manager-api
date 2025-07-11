import { BookModel } from '../../../../domain/models/book'

type Db = {
  books: BookModel[]
}

export const mockDb: Db = {
  books: []
}
