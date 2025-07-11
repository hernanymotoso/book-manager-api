import { AddBook } from '../../../../domain/usecases/book/add-book'
import { MissingParamError } from '../../../errors'
import { badRequest, ok, serverError } from '../../../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class AddBookController implements Controller {
  constructor (private readonly addBook: AddBook) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['title', 'author']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const book = await this.addBook.add(httpRequest.body)
      return ok(book)
    } catch (error) {
      return serverError()
    }
  }
}
