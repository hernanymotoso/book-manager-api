import { ValidateUserTokenService } from '../../protocols/auth/validate-user-token-service'
import { AuthValidateUserToken } from './auth-validate-user-token'

const makeValidateUserTokenService = (): ValidateUserTokenService => {
  class ValidateUserTokenServiceStub implements ValidateUserTokenService {
    async validate (token: string): Promise<boolean> {
      return await new Promise(resolve => { resolve(true) })
    }
  }
  return new ValidateUserTokenServiceStub()
}

type SutTypes = {
  sut: AuthValidateUserToken
  validateUserTokenServiceStub: ValidateUserTokenService
}

const makeSut = (): SutTypes => {
  const validateUserTokenServiceStub = makeValidateUserTokenService()
  const sut = new AuthValidateUserToken(validateUserTokenServiceStub)

  return {
    sut,
    validateUserTokenServiceStub
  }
}

describe('AuthValidateUserToken UseCase', () => {
  it('should call ValidateUserTokenService with correct value', async () => {
    const { sut, validateUserTokenServiceStub } = makeSut()
    const validateSpy = jest.spyOn(validateUserTokenServiceStub, 'validate')
    await sut.validate('any_token')
    expect(validateSpy).toHaveBeenCalledWith('any_token')
  })
})
