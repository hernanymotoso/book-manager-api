import { LoadBooks } from '../../../../domain/usecases/book/load-books'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class LoadBooksController implements Controller {
  constructor (private readonly loadBooks: LoadBooks) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadBooks.load()
    return null
  }
}
