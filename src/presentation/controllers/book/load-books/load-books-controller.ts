import { LoadBooks } from '../../../../domain/usecases/book/load-books'
import { noContent, ok } from '../../../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class LoadBooksController implements Controller {
  constructor (private readonly loadBooks: LoadBooks) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const books = await this.loadBooks.load()
    return books.length ? ok(books) : noContent()
  }
}
