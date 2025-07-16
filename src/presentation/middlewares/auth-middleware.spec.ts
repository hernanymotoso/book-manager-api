import { ValidateUserToken } from '../../domain/usecases/user/validate-user-token'
import { AccessDeniedError } from '../errors'
import { forbidden } from '../helpers/http-helpers'
import { AuthMiddleware } from './auth-middleware'

const makeValidateUserToken = (): ValidateUserToken => {
  class ValidateUserTokenStub implements ValidateUserToken {
    async validate (token: string): Promise<boolean> {
      return true
    }
  }
  return new ValidateUserTokenStub()
}

type SutTypes = {
  sut: AuthMiddleware
  validateUserTokenStub: ValidateUserToken
}

const makeSut = (role?: string): SutTypes => {
  const validateUserTokenStub = makeValidateUserToken()
  const sut = new AuthMiddleware(validateUserTokenStub)
  return {
    sut,
    validateUserTokenStub
  }
}

describe('Auth Middleware', () => {
  it('Should return 403 if no x-access-token exists in headers', async () => {
    const { sut, validateUserTokenStub } = makeSut()
    jest.spyOn(validateUserTokenStub, 'validate').mockReturnValueOnce(Promise.resolve(false))
    const httpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })
})
