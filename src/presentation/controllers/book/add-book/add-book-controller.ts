import { AddBook } from '../../../../domain/usecases/book/add-book'
import { MissingParamError } from '../../../errors'
import { badRequest } from '../../../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class AddBookController implements Controller {
  constructor (private readonly addBook: AddBook) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.title) {
      return badRequest(new MissingParamError('title'))
    }
    if (!httpRequest.body.author) {
      return badRequest(new MissingParamError('author'))
    }
    await this.addBook.add(httpRequest.body)
  }
}
