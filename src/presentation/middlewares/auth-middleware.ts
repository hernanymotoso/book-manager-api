import { ValidateUserToken } from '../../domain/usecases/user/validate-user-token'
import { AccessDeniedError } from '../errors'
import { forbidden, ok } from '../helpers/http-helpers'
import { HttpRequest, HttpResponse, Middleware } from '../protocols'

export class AuthMiddleware implements Middleware {
  constructor (private readonly validateUserToken: ValidateUserToken) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const isValid = await this.validateUserToken.validate('')
    if (isValid) {
      return ok({})
    }
    return forbidden(new AccessDeniedError())
  }
}
