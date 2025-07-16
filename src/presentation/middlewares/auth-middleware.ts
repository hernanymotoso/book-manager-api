import { ValidateUserToken } from '../../domain/usecases/user/validate-user-token'
import { AccessDeniedError } from '../errors'
import { forbidden, ok, serverError } from '../helpers/http-helpers'
import { HttpRequest, HttpResponse, Middleware } from '../protocols'

export class AuthMiddleware implements Middleware {
  constructor (private readonly validateUserToken: ValidateUserToken) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      const isValid = await this.validateUserToken.validate(accessToken)
      if (isValid) {
        return ok({})
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError()
    }
  }
}
