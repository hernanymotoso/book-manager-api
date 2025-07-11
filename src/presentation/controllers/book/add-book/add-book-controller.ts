import { MissingParamError } from '../../../errors'
import { badRequest } from '../../../helpers/http-helpers'
import { Controller, HttpRequest, HttpResponse } from '../../../protocols'

export class AddBookController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.title) {
      return badRequest(new MissingParamError('title'))
    }
  }
}
